const router = require('express').Router();

const { Basket, Card } = require('../../db/models');

router.post('/', async (req, res) => {
  const { cardName, cardPrice, cardImage, cardCondition, id } = req.body;
  const { newUserID } = req.session;
  try {
    await Card.create({ name: cardName, price: cardPrice, user_id: newUserID, image: cardImage, condition: cardCondition });
    await Basket.destroy({ where: { id } });
    res.json({ destroy: 'OK!' });
  } catch (error) {
    console.log('Ошибка покупки карты !!!!', error);
  }
});

module.exports = router;
