const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const BasketMain = require('../views/Basket');
const { Basket, Card } = require('../../db/models');

const router = express.Router();
const { checkAuth } = require('../middlewares/checkAuth');

router.get('/', checkAuth, async (req, res) => {
  const { newUser, newUserID, newUserCity } = req.session;
  const cards = await Basket.findAll({ raw: true, where: { user_id: newUserID }, include: Card });
  console.log(cards);
  renderTemplate(BasketMain, { cards, newUser, newUserID, newUserCity } || null, res);
});

module.exports = router;
