/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cards', [{
      name: 'ЯРОСТНЫЙ УЛЬТИМАТУМ',
      price: 100,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/206-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ТАЛИСМАН БЭНТА',
      price: 150,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/155-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СМОЛЯНОЙ ДЕМОН',
      price: 200,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/89-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ПАНОРАМА БЭНТА',
      price: 130,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/221-245x341.jpg',
      condition: 'MP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ЭФИРИЕВЫЙ ПЛЕТУН',
      price: 190,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/image/images/mh2-ru/efirievij-pletun-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'АЭРОМЕБА',
      price: 200,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/image/images/mh2-ru/aeromeba-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ЭЛЕМЕНТАЛЬ КРОВАВОГО КОСТРА',
      price: 300,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/93-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ЯРОСТНЫЙ УЛЬТИМАТУМ',
      price: 200,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/206-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СТОИЧЕСКИЙ АНГЕЛ',
      price: 170,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/199-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'РАФИК МНОГОМЕДАЛЬНЫЙ',
      price: 100,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/185-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ПОЦЕЛУЙ АМЕШИ',
      price: 210,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/177-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
