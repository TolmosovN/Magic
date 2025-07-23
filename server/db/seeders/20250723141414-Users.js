const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'user1@example.com',
          password: bcrypt.hashSync('123', 10),
          name: 'Иван Иванов',
          city: 'Москва',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user2@example.com',
          password: bcrypt.hashSync('123', 10),
          name: 'Петр Петров',
          city: 'Санкт-Петербург',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user3@example.com',
          password: bcrypt.hashSync('123', 10),
          name: 'Анна Сидорова',
          city: 'Новосибирск',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user4@example.com',
          password: bcrypt.hashSync('123', 10),
          name: 'Мария Кузнецова',
          city: 'Екатеринбург',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user5@example.com',
          password: bcrypt.hashSync('123', 10),
          name: 'Алексей Смирнов',
          city: 'Казань',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
