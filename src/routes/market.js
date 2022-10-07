const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkAuth } = require('../middlewares/checkAuth');
const { Card, Order, User } = require('../../db/models');
const { sequelize } = require('../../db/models');

const Market = require('../views/Market');

router.get('/', checkAuth, async (req, res) => {
  try {
    const { newUser, newUserCity, newUserID } = req.session;
    const cards = await Order.findAll({ raw: true, include: Card });
    const allCity = await User.findAll({ raw: true });
    const cityAll = allCity.map((el) => el.city);
    const cityPerfect = Array.from(new Set(cityAll));
    const city = await User.findAll({ where: { city: newUserCity }, include: Card, raw: true });
    // const city = await sequelize.query("SELECT * FROM users");
    // ! select "Users".city from "Users" where id =:userId;
    console.log(city);
    renderTemplate(Market, {
      cards, newUser, newUserCity, newUserID, cityPerfect,
    }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  const { cityFind } = req.body;
  try {
    const cityFindFil = await User.findAll({ where: { city: cityFind }, include: Card, raw: true });
    const cityTrue = cityFindFil.map((el) => ({ idUser: el.id, id: el['Cards.id'], image: el['Cards.image'], name: el['Cards.name'], price: el['Cards.price'], condition: el['Cards.condition'], city: el.city }));
    // console.log('ffffff', fil);
    res.json(cityTrue);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
