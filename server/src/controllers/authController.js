const cookieConfig = require('../config/cookieConfig');
const jwtConfig = require('../config/jwtConfig');
const AuthService = require('../services/authService');
const generateTokens = require('../utils/generateTokens');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
  static async signup(req, res) {
    try {
      const { name, email, password, city } = req.body;
      const { user, accessToken, refreshToken } = await AuthService.signup({
        name,
        email,
        password,
        city,
      });

      res
        .status(201)

        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async signin(req, res) {
    try {
      const { password, email } = req.body;
      if (!email || !password) return res.status(400).json('Поля не заполнены');
      const { user, accessToken, refreshToken } = await AuthService.signin(
        email,
        password,
      );
      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      console.log(refreshToken);
      const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const { refreshToken: newRefreshToken, accessToken } = generateTokens({ user });
      res
        .cookie('refreshToken', newRefreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .json({ user, accessToken });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: error.message });
    }
  }

  static signout(req, res) {
    res.clearCookie('refreshToken').sendStatus(204);
  }
}

module.exports = AuthController;
