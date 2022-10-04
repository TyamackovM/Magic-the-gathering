const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registration');

const { User } = require('../../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Registration, null, res);
};

const regUser = async (req, res) => {
  const { login, password, city } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    if (city) {
      const newUser = await User.create({ login, password: hash, city });
      req.session.newUser = newUser.login;
      req.session.newUserCity = newUser.city;
      req.session.newUserID = newUser.id;
      console.log(req.session.newUserCity);
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.send('Выберите город!');
    }
  } catch (error) {
    res.send(`Ошибка регистрации нового пользователя! ----> ${error}`);
  }
};

module.exports = { renderRegister, regUser };
