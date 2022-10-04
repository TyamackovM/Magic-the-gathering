const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Main, { newUser }, res);
};

module.exports = { renderHome };
