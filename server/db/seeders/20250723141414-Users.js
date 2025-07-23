'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@example.com',
        password: 'password1',
        name: 'Иван Иванов',
        city: 'Москва',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@example.com',
        password: 'password2',
        name: 'Петр Петров',
        city: 'Санкт-Петербург',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user3@example.com',
        password: 'password3',
        name: 'Анна Сидорова',
        city: 'Новосибирск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user4@example.com',
        password: 'password4',
        name: 'Мария Кузнецова',
        city: 'Екатеринбург',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user5@example.com',
        password: 'password5',
        name: 'Алексей Смирнов',
        city: 'Казань',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};