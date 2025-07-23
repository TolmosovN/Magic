'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Сначала получаем ID пользователей
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM "Users" LIMIT 5',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Проверяем, что есть достаточное количество пользователей
    if (users.length < 5) {
      throw new Error('Необходимо минимум 5 пользователей');
    }

    // Вставляем карточки
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Редкая карта 1',
        image_url: 'https://example.com/card1.jpg',
        price: 1000,
        condition: 'Отличное',
        userId: users[0].id,
        isSold: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Редкая карта 2',
        image_url: 'https://example.com/card2.jpg',
        price: 1500,
        condition: 'Хорошее',
        userId: users[1].id,
        isSold: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Редкая карта 3',
        image_url: 'https://example.com/card3.jpg',
        price: 2000,
        condition: 'Новое',
        userId: users[2].id,
        isSold: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Редкая карта 4',
        image_url: 'https://example.com/card4.jpg',
        price: 2500,
        condition: 'Удовлетворительное',
        userId: users[3].id,
        isSold: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Редкая карта 5',
        image_url: 'https://example.com/card5.jpg',
        price: 3000,
        condition: 'Отличное',
        userId: users[4].id,
        isSold: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};