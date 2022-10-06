const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
// const { checkAuth } = require('../middlewares/checkAuth');
const { Card, Order } = require('../../db/models');

const Market = require('../views/Market');

router.get('/', async (req, res) => {
  try {
    const { newUser, newUserCity, newUserID } = req.session;
    const cards = await Order.findAll({ raw: true, include: Card });
    renderTemplate(Market, { cards, newUser, newUserCity, newUserID }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
