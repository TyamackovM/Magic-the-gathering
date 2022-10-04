const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
// const { checkAuth } = require('../middlewares/checkAuth');
const { Card } = require('../../db/models');

const MainTwo = require('../views/MainTwo');

// router.get('/', (req, res) => {
//   const { newUser } = req.session;
//   renderTemplate(MainTwo, { newUser } || null, res);
// });

router.get('/', async (req, res) => {
  try {
    const { newUser } = req.session;
    const cards = await Card.findAll({ raw: true });
    renderTemplate(MainTwo, { cards, newUser }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
