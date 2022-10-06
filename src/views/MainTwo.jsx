const React = require('react');
const Layout = require('./Layout');

module.exports = function MainTwo({
  cards, newUser, newUserCity, newUserID, cityPerfect,
}) {
  return (
    <Layout newUser={newUser}>
      {/* <script defer src="/js/basketAdd.js" /> */}
      <div className="main-page-header">
        <h1>Рандомный заголовок</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Сортировка по городу
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            { cityPerfect?.map((el) => (
              <li><a className="dropdown-item" href="#">{el}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cardsContainer">

        <div className="container">

          <div className="slider" data-slider="itc-slider" data-loop="false">
            <div className="slider__wrapper">
              <div className="slider__items">

                {cards?.map((card) => (
                  <div className="slider__item">
                    <div key={card.id} className="card" style={{ width: '11rem' }}>
                      <div className="card-body cardWrapper">
                        <img className="card-img" src={card.image} />
                        <div className="boxCard">
                          <p className="card-title">{card.name}</p>
                          <p className="noneId">{card.id}</p>
                          <p className="card-condition">
                            Состояние:
                            {' '}
                            {card.condition}
                          </p>
                          <p className="card-price">
                            {card.price}
                            ₽
                          </p>
                        </div>
                        <button type="button" className="btn btn-outline-info btnBucket">В корзину</button>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <button className="slider__control" data-slide="prev" />
            <button className="slider__control" data-slide="next" />
          </div>

        </div>

      </div>

    </Layout>
  );
};
