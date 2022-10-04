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
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ТАЛИСМАН БЭНТА',
      price: 150,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/155-245x341.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СМОЛЯНОЙ ДЕМОН',
      price: 200,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/89-245x341.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ПАНОРАМА БЭНТА',
      price: 130,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/221-245x341.jpg',
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
