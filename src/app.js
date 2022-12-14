require('dotenv').config();
require('@babel/core');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { PORT, SESSION_SECRET_MAGIC } = process.env;

const session = require('express-session');

const FileStore = require('session-file-store')(session);

const mainRouter = require('./routes/main');
const regRouter = require('./routes/registr');
const loginRouter = require('./routes/login');
const mainTwoRouter = require('./routes/mainTwo');
const personalAreaRouter = require('./routes/personalArea');
const basketRouter = require('./routes/basket');
const basketAddRouter = require('./routes/basketAdds');
const cardAddRouter = require('./routes/cardAdds');
const marketRouter = require('./routes/market');
const orderSellRouter = require('./routes/orderSells');
const marketBasketRouter = require('./routes/marketBaskets');

const { sequelize } = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'magicTheGathering',
  store: new FileStore(),
  secret: SESSION_SECRET_MAGIC ?? 'supermagic',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

// app.use('/', mainRouter);
app.use('/registr', regRouter);
app.use('/login', loginRouter);
app.use('/', mainTwoRouter);
app.use('/personalarea', personalAreaRouter);
app.use('/basket', basketRouter);
app.use('/basketadd', basketAddRouter);
app.use('/cardadd', cardAddRouter);
app.use('/market', marketRouter);
app.use('/ordersell', orderSellRouter);
app.use('/marketbasket', marketBasketRouter);

app.get('/logout', (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('magicTheGathering');
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});

//! const cards = await User.findAll( { where: { city: ???????????? }, include Card });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('???????????????????? ????????????????????????!');
  } catch (error) {
    console.log('Error', error);
  }
});
