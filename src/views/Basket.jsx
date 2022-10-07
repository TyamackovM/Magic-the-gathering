const React = require('react');
const Layout = require('./Layout');

module.exports = function BasketMain({
  cards, newUser, newUserID, newUserCity,
}) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/cardAdd.js" />
      <div className="userInfo">
        <h4>Карты в корзине:</h4>
      </div>
      <div className="basketContainer">
        {cards.length
          ? cards.map((card) => (
            <div key={card['Card.id']} className="card" style={{ width: '11rem' }}>
              <div className="card-body">
                <img className="card-img" src={card['Card.image']} />
                <div className="boxCard">
                  <div className="card-title">{card['Card.name']}</div>
                  <div className="priceAbout">Состояние:</div>
                  <div className="card-condition">
                    {card['Card.condition']}
                  </div>
                  <div className="noneId">{card.id}</div>
                  <div>
                    <div className="card-price">
                      {card['Card.price']}
                    </div>
                    <div className="rubAbout">₽</div>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-outline-info btnDelete">Купить</button>
                </div>
              </div>
            </div>
          ))
          : (
            <h1>
              Нет карт в корзине
            </h1>
          )}
      </div>
    </Layout>
  );
};
