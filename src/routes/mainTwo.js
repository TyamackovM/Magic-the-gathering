const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
// const { checkAuth } = require('../middlewares/checkAuth');
const { Card, User } = require('../../db/models');

const MainTwo = require('../views/MainTwo');

router.get('/', async (req, res) => {
  try {
    const { newUser, newUserCity, newUserID } = req.session;
    const cards = await Card.findAll({ raw: true, where: { user_id: 1 } });
    const allCity = await User.findAll({ raw: true });
    const cityAll = allCity.map((el) => el.city);
    const cityPerfect = Array.from(new Set(cityAll));
    renderTemplate(MainTwo, { cards, newUser, newUserCity, newUserID, cityPerfect }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
