const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class AuthService {
  static async signup({ email, password, name }) {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { hashpass: await bcrypt.hash(password, 10), name },
    });

    // Проверка пароля
    // const isCorrect = await bcrypt.compare(password, user.hashpass);

    if (!isCreated) {
      throw new Error('User already exists');
    }
    const plainUser = user.get();
    delete plainUser.hashpass;
    return plainUser;
  }
}

module.exports = AuthService;
