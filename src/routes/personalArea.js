const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const personalArea = require('../views/PersonalArea');
const { checkAuth } = require('../middlewares/checkAuth');
const { Card } = require('../../db/models');

router.get('/', checkAuth, async (req, res) => {
  const { newUser, newUserCity, newUserID } = req.session;
  const userCards = await Card.findAll({ raw: true, order: [['user_id', 'ASC']], where: { user_id: newUserID, status: 'false' } });
  renderTemplate(personalArea, { newUser, newUserCity, newUserID, userCards } || null, res);
});

router.post('/', async (req, res) => {
  // console.log('=====', req.body);
  const { newUserID } = req.session;
  const { title, price, link, condition } = req.body;
  try {
    await Card.create({ name: title, user_id: newUserID, price: price, image: link, condition: condition, status: 'false' });
    res.redirect('/personalarea');
  } catch (error) {
    res.send('Ошибка добавления карты в личный кабинет!====> ', error);
  }
});

module.exports = router;
