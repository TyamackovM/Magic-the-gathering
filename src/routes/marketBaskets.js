const router = require('express').Router();

const { Basket, Card, Order } = require('../../db/models');

router.post('/', async (req, res) => {
  const { id, idCard } = req.body;
  const { newUserID } = req.session;
  try {
    await Basket.create({ card_id: idCard, user_id: newUserID });
    await Order.destroy({ where: { id } });
    res.json({ destroy: 'OK!' });
  } catch (error) {
    console.log('Ошибка перехода карты из маркета в корзину!!!!', error);
  }
});

module.exports = router;
