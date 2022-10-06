const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkAuth } = require('../middlewares/checkAuth');
const { Card, Order, User } = require('../../db/models');

const Market = require('../views/Market');

router.get('/', checkAuth, async (req, res) => {
  try {
    const { newUser, newUserCity, newUserID } = req.session;
    const cards = await Order.findAll({ raw: true, include: Card });
    const allCity = await User.findAll({ raw: true });
    const cityAll = allCity.map((el) => el.city);
    const cityPerfect = Array.from(new Set(cityAll));
    renderTemplate(Market, { cards, newUser, newUserCity, newUserID, cityPerfect }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
