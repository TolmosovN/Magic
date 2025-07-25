'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Winter',
          image_url: 'https://i.redd.it/aiqfjs92t8qd1.jpeg',
          price: 1000,
          condition: 'Новая',
          userId: 1,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Thornvault Forager',
          image_url:
            'https://cards.scryfall.io/large/front/8/c/8c2d6b02-a453-40f9-992a-5c5542987cfb.jpg?1721933896',
          price: 1500,
          condition: 'Б/У',
          userId: 2,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Xyris',
          image_url:
            'https://www.digipen.edu/sites/default/files/public/img/news/05-body/corey-bowen-his-magical-job-designing-magic-gathering-cards-body1.jpg',
          price: 2000,
          condition: 'Поврежденная',
          userId: 3,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dwynen',
          image_url:
            'https://moonveilgames.com/cdn/shop/files/il_fullxfull.5018884481_k11a.jpg?v=1715815097&width=1445',
          price: 2500,
          condition: 'Новая',
          userId: 4,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Niv-Mizzet',
          image_url: 'https://miro.medium.com/v2/resize:fit:672/0*WtTRy5c4r3h_JFVB.jpg',
          price: 3000,
          condition: 'Поврежденная',
          userId: 5,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Omnath',
          image_url:
            'https://draftsim.com/wp-content/uploads/mtg-card-DB/cards/4/e/4e4fb50c-a81f-44d3-93c5-fa9a0b37f617.jpg',
          price: 1200,
          condition: 'Б/У',
          userId: 1,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ugin',
          image_url:
            'https://i.etsystatic.com/18917944/r/il/f209ea/1753829759/il_570xN.1753829759_jz6a.jpg',
          price: 1800,
          condition: 'Новая',
          userId: 2,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Zacama',
          image_url:
            'https://www.gamespot.com/a/uploads/original/3/37852/4165171-zacamaprimalcalamity_mtg-cmm.jpg',
          price: 900,
          condition: 'Поврежденная',
          userId: 3,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Drake Hatcher',
          image_url:
            'https://scifibloggers.com/wp-content/uploads/2024/11/Drake-Hatcher_MTG-733x1024.png',
          price: 2200,
          condition: 'Новая',
          userId: 1,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Corrupted One',
          image_url: 'https://mtg.design/img/theme/qsfm16.jpg',
          price: 1700,
          condition: 'Б/У',
          userId: 4,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Moonshaker Cavalry',
          image_url:
            'https://cards.scryfall.io/large/front/0/9/092c48bd-b648-4c9e-aa99-cac3c407911d.jpg?1692936576',
          price: 2500,
          condition: 'Новая',
          userId: 5,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Extract from Darkness',
          image_url:
            'https://unicorncards.co.uk/images/thumbs/0064595_extract-from-darkness-uncommon-battle-for-baldurs-gate-mint-mtg-card.jpeg',
          price: 800,
          condition: 'Поврежденная',
          userId: 3,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Six',
          image_url:
            'https://cdn.magecards.co.uk/catalog/cards/mtg/six-e8edcc4a-5ebd9763-default-lg.webp',
          price: 1900,
          condition: 'Б/У',
          userId: 2,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mirrodin Avenged',
          image_url:
            'https://www.gamespot.com/a/uploads/original/3/37852/4117385-mirrodinavenged_en-0118.jpg',
          price: 1450,
          condition: 'Новая',
          userId: 1,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Creepy Doll',
          image_url:
            'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/10/Creepy-Doll-mtg-card.jpg',
          price: 2300,
          condition: 'Б/У',
          userId: 5,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hypergenesis',
          image_url:
            'https://static.starcitygames.com/sales/cardscans/MTG/TSP/en/nonfoil/Hypergenesis.jpg',
          price: 950,
          condition: 'Поврежденная',
          userId: 4,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kalonian Hydra',
          image_url:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/4/3/438bd3c1-98f2-4fcc-8521-995c6c5c1a79.jpg?1562828503',
          price: 2750,
          condition: 'Новая',
          userId: 2,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Esper Sentinel',
          image_url:
            'https://cards.scryfall.io/large/front/f/3/f3537373-ef54-4578-9d05-6216420ee349.jpg?1626093502',
          price: 1600,
          condition: 'Б/У',
          userId: 3,
          isSold: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Grelzok',
          image_url: 'https://mtg.design/img/theme/efyi52.jpg',
          price: 5000,
          condition: 'Новая',
          userId: 4,
          isSold: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Underworld Breach',
          image_url:
            'https://dropinblog.net/34254080/files/MTG/most-broken-cards/cards/underworld-breach.jpg',
          price: 2100,
          condition: 'Поврежденная',
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
