const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');

class AuthService {
  static async signup({ email, password, name, city }) {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { password: await bcrypt.hash(password, 10), name, city },
    });

    // Проверка пароля
    // const isCorrect = await bcrypt.compare(password, user.hashpass);

    if (!isCreated) {
      throw new Error('User already exists');
    }
    const plainUser = user.get();
    delete plainUser.password;
    return plainUser;
  }

  static async signin(email, password) {
    const userExisting = await User.findOne({ where: { email } });
    if (!userExisting) throw new Error('User уже существует');
    const truePassword = await bcrypt.compare(password, userExisting.password);
    if (!truePassword) throw new Error('Пароль не правильный');
    const plainUser = userExisting.get();
    delete plainUser.password;
    const { accessToken, refreshToken} = generateTokens({user: plainUser})
    return {user: plainUser, accessToken, refreshToken};
  }
}

module.exports = AuthService;
