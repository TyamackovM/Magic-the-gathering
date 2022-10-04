const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

router.get('/', (req, res) => {
  const { newUser } = req.session;
  renderTemplate(Main, { newUser } || null, res);
});

module.exports = router;
