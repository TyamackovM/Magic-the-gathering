const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const personalArea = require('../views/PersonalArea');
// const checkAuth = require('../middlewares/checkAuth');
const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const { newUser, newUserCity, newUserID } = req.session;
  const userCards = await Card.findAll({ raw: true, order: [['user_id', 'ASC']], where: { user_id: newUserID } });
  renderTemplate(personalArea, { newUser, newUserCity, newUserID, userCards } || null, res);
});

module.exports = router;
