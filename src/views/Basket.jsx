const React = require('react');
const Layout = require('./Layout');

module.exports = function BasketMain({ cards, newUser, newUserID, newUserCity }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/cardAdd.js" />
      <div className="basketContainer">
        {cards.length
          ? cards.map((card) => (
            <div key={card['Card.id']} className="card" style={{ width: '11rem' }}>
              <div className="card-body">
                <img className="card-img" src={card['Card.image']} />
                <p className="card-title">{card['Card.name']}</p>
                <p className="priceAbout">Состояние:</p>
                <p className="card-condition">
                  {card['Card.condition']}
                </p>
                <p className="noneId">{card.id}</p>
                <p className="card-price">
                  {card['Card.price']}
                </p>
                <p className="rubAbout">₽</p>
                <button type="button" className="btn btn-outline-info btnDelete">Купить</button>
              </div>
            </div>
          ))
          : (
            <h1>
              Нет карточек
            </h1>
          )}
      </div>
    </Layout>
  );
};
