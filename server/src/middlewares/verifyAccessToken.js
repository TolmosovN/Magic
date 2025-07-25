const jwt = require('jsonwebtoken');
require('dotenv').config();

// function verifyAccessToken(req, res, next) {
//   try {
//     const accessToken = req.headers.authorization.split(' ')[1];
//     const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//     res.locals.user = user;
//     next();
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(403);
//   }
// }
function verifyAccessToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    // if (!authHeader) return res.sendStatus(401); // 401 Unauthorized если нет заголовка

    const token = authHeader.split(' ')[1];
    // if (!token) return res.sendStatus(401);

    const { user } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (err) {
    console.log('JWT verification error:', err.message);
    res.status(403).json({ error: 'Invalid or expired token' }); // Более информативный ответ
  }
}

module.exports = verifyAccessToken;
