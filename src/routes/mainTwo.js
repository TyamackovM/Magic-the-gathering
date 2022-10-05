const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
// const { checkAuth } = require('../middlewares/checkAuth');
const { Card } = require('../../db/models');

const MainTwo = require('../views/MainTwo');

router.get('/', async (req, res) => {
  try {
    const { newUser, newUserCity, newUserID } = req.session;
    const cards = await Card.findAll({ raw: true, where: { user_id: 1 } });
    renderTemplate(MainTwo, { cards, newUser, newUserCity, newUserID }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
