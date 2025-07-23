'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    

    await queryInterface.bulkInsert('Carts', [
      {
        userId: 1,
        cardId: 2,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        cardId: 5,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        cardId: 3,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        cardId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        cardId: 5,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};