const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

router.get('/', (req, res) => {
  const { newUser, newUserID, newUserCity } = req.session;
  renderTemplate(Main, { newUser, newUserID, newUserCity } || null, res);
});

module.exports = router;
