const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    const passCheck = await bcrypt.compare(password, user.password);
    if (passCheck) {
      req.session.newUser = user.login;
      req.session.newUserCity = user.city;
      req.session.newUserID = user.id;
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send('Пароль или логин не верный!');
  }
};

module.exports = { renderLogin, loginUser };
