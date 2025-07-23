'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Сначала получаем ID пользователей и карточек
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM "Users" LIMIT 5',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    
    const cards = await queryInterface.sequelize.query(
      'SELECT id FROM "Cards" LIMIT 5',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Проверяем, что есть достаточное количество пользователей и карточек
    if (users.length < 5 || cards.length < 5) {
      throw new Error('Необходимо минимум 5 пользователей и 5 карточек');
    }

    await queryInterface.bulkInsert('Carts', [
      {
        userId: users[0].id,
        cardId: cards[1].id,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: users[1].id,
        cardId: cards[2].id,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: users[2].id,
        cardId: cards[3].id,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: users[3].id,
        cardId: cards[4].id,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: users[4].id,
        cardId: cards[0].id,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};