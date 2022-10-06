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
      name: 'ПОЦЕЛУЙ АМЕШИ',
      price: 210,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/177-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СЕНЕШАЛЬ ВАЛЕРОНА',
      price: 115,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/198-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ПРИЗЫВНЫЙ УЛЬТИМАТУМ',
      price: 310,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/163-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СЕНЕШАЛЬ ВАЛЕРОНА',
      price: 110,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/198-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ОТРАЖАТЕЛЬ ПРИСПЕШНИКОВ',
      price: 120,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/211-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ОТЕЦ БОГОВ',
      price: 230,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ala/ru/170-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ДРОБИТЕЛЬ ВОЛН',
      price: 220,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/eve/ru/31-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ГРОМИЛА С ТОПОРОМ',
      price: 110,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/eve/ru/54-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ВОЙСКО ТАЛАРЫ',
      price: 90,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/eve/ru/77-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ВЕРНЫЙ КРЕЧЕТ',
      price: 170,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/eve/ru/11-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'СКИТАЛЕЦ ИЗ ГРОБНИЦЫ',
      price: 410,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/emn/ru/69-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'РАДУЖНЫЙ ОБЕРЕГ',
      price: 110,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/m15/ru/36-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'БИОСТРАТЕГ',
      price: 710,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/gtc/ru/146-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'МАНИПУЛЯТОР СИМИКОВ',
      price: 510,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/gtc/ru/50-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'БОЛОТО',
      price: 510,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/ori/ru/262-245x341.jpg',
      condition: 'SP',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ДИКИЙ МААКА',
      price: 510,
      user_id: 1,
      image: 'https://spellmarket.ru/image/cache/catalog/cards/rna/ru/574017-245x341.jpg',
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
