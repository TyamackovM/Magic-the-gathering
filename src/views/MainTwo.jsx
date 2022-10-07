const React = require('react');
const Layout = require('./Layout');

module.exports = function MainTwo({
  cards, newUser, newUserCity, newUserID, cityPerfect,
}) {
  return (
    <Layout newUser={newUser}>
      {/* <script defer src="/js/basketAdd.js" /> */}
      <div className="main-page-header">
        <h1>Карты в наличии на маркетплэйсе:</h1>
        
      </div>
      <div className="cardsContainer">

        <div className="container">

          <div className="slider" data-slider="itc-slider" data-loop="false">
            <div className="slider__wrapper">
              <div className="slider__items">

                {cards?.map((card) => (
                  <div className="slider__item">
                    <div key={card.id} className="card cardPC" style={{ width: '12rem' }}>
                      <div className="card-body cardWrapper cardPCstyles">
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
