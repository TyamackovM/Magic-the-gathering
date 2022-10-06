const router = require('express').Router();

const { Basket, Card, Order } = require('../../db/models');

router.post('/', async (req, res) => {
  const { id, user_id } = req.body;
  const { newUserID } = req.session;
  try {
    await Order.create({ card_id: id, user_id: newUserID });
    // await Order.create({ card_id: id, card_name: cardName, card_price: cardPrice, card_image: cardImage, card_condition: cardCondition, user_id: newUserID });
    await Card.update({ user_id: null }, { where: { id } });
    res.json({ destroy: 'OK!' });
  } catch (error) {
    console.log('Ошибка продажи карты!!!!', error);
  }
});

module.exports = router;

// await User.update({ lastName: "Doe" }, {
//   where: {
//     lastName: null
//   }
// });
