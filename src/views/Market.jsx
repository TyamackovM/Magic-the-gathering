const React = require('react');
const Layout = require('./Layout');

module.exports = function Market({ cards, newUser, newUserCity, newUserID }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/marketBasket.js" />
      <div className='main-page-header'>
        <h1>Рандомный заголовок</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Сортировка по городу
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Москва</a></li>
            <li><a className="dropdown-item" href="#">Санкт-Петербург</a></li>
            <li><a className="dropdown-item" href="#">Челябинск</a></li>
          </ul>
        </div>
      </div>
      <div className="marketContainer">
        {cards?.map((card) => (
          <div key={card.id} className="card" style={{ width: '11rem' }}>
            <div className="card-body cardWrapper">
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
              <p className="card-city">
                  Город: Тест
              </p>
              </div>
              <button type="button" className="btn btn-outline-info btnBucket">В корзину</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
