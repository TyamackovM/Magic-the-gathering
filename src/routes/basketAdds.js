const router = require('express').Router();

const { Basket, Card } = require('../../db/models');

router.post('/', async (req, res) => {
  const { cardName } = req.body;
  
  console.log(cardName);
  try {
    await Basket.create({ card_name: cardName });
  } catch (error) {
    console.log('Ошибка добавления карты в базу!', error);
  }
});

module.exports = router;
