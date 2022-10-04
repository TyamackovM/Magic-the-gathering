const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Basket = require('../views/Basket');
const router = express.Router();
const { checkAuth } = require('../middlewares/checkAuth');

router.get('/', checkAuth, (req, res) => {
  const { newUser } = req.session;
  renderTemplate(Basket, { newUser } || null, res);
});

module.exports = router;
