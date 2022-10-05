const router = require('express').Router();

const { Basket, Card } = require('../../db/models');

router.post('/', async (req, res) => {
  const { cardName, cardId } = req.body;
  const { newUserID } = req.session;
  try {
    await Basket.create({ card_id: cardId, user_id: newUserID });
    res.json({ create: 'OK!' });
  } catch (error) {
    console.log('Ошибка добавления карты в базу!', error);
  }
});

module.exports = router;
