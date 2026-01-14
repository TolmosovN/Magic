'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Редкая карта 1',
          image_url: 'https://i.redd.it/aiqfjs92t8qd1.jpeg',
          price: 1000,
          condition: 'Отличное',
          userId: 1,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Редкая карта 2',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbbt77Lq_LX1MjEuT8FXK8yMR08fkFUGm5A&s',
          price: 1500,
          condition: 'Хорошее',
          userId: 2,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Редкая карта 3',
          image_url:
            'https://www.digipen.edu/sites/default/files/public/img/news/05-body/corey-bowen-his-magical-job-designing-magic-gathering-cards-body1.jpg',
          price: 2000,
          condition: 'Новое',
          userId: 3,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Редкая карта 4',
          image_url:
            'https://moonveilgames.com/cdn/shop/files/il_fullxfull.5018884481_k11a.jpg?v=1715815097&width=1445',
          price: 2500,
          condition: 'Удовлетворительное',
          userId: 4,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Редкая карта 5',
          image_url:
            'https://aura-print.com/media/wysiwyg/AP_Blog_MTG_Cards_Chaos_Orb_1.jpg',
          price: 3000,
          condition: 'Отличное',
          userId: 5,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
