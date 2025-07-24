const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');

class AuthService {
  static async signup({ email, password, name, city }) {
    if(!email || ! name || !password || !city) throw new Error('Не хватает данных')
    
    const userExisting = await User.findOne({ where: { email } });
    if (userExisting) throw new Error('User уже существует');
    const truePassword = await bcrypt.hashSync(password, 10);
    const user = await User.create({email, name, password: truePassword, city})
    const plainUser = user.get();
    delete plainUser.password;
    const { accessToken, refreshToken } = generateTokens({ user: plainUser });
    return { user: plainUser, accessToken, refreshToken };
  }

  static async signin(email, password) {
    const userExisting = await User.findOne({ where: { email } });
    if (!userExisting) throw new Error('User не существует');
    const truePassword = await bcrypt.compare(password, userExisting.password);
    if (!truePassword) throw new Error('Пароль не правильный');
    const plainUser = userExisting.get();
    delete plainUser.password;
    const { accessToken, refreshToken} = generateTokens({user: plainUser})
    return {user: plainUser, accessToken, refreshToken};
  }
}

module.exports = AuthService;
