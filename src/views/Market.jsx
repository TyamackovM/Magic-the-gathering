const React = require('react');
const Layout = require('./Layout');

module.exports = function Market({ cards, newUser, newUserCity, newUserID, cityPerfect }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/marketBasket.js" />

      <script defer src="/js/filterCity.js" />

      <div className="main-page-header">
        <h1>Карты в продаже:</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle filter-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Сортировка по городу
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          { cityPerfect?.map((el) => (
              <li className="cityFil" id={el}><a className="dropdown-item" href="#">{el}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="marketContainer">
        {cards?.map((card) => (
          <div key={card.id} className="card cardPC" style={{ width: '12rem' }}>
            <div className="card-body cardWrapper cardPCstyles">
              <img className="card-img" src={card['Card.image']} />
              <div className="boxCard">
              <p className="card-title">{card['Card.name']}</p>
              <p className="noneId">{card['Card.id']}</p>
              <p className="noneIds">{card.id}</p>
              <p className="card-condition">
                Состояние:
                {' '}
                {card['Card.condition']}
              </p>
              <p className="card-price">
                {card['Card.price']}
                ₽
              </p>
              <p className="city">{card['Card.city']}</p>
              </div>
              <button type="button" className="btn btn-outline-info btnBucket">В корзину</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
