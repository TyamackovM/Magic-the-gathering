const React = require('react');
const Layout = require('./Layout');

module.exports = function PersonalArea({
  newUser, newUserCity, newUserID, userCards,
}) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/styles/addCard.css" />
      <script defer src="/js/orderSell.js" />
      <div className="userInfo">
        <h3>{ `Nickname: ${newUser}` }</h3>
        <h3>{`City: ${newUserCity}`}</h3>
      </div>

      <div className="personalContainer">
        {userCards.map((card) => (
          <div key={card.id} className="card" style={{ width: '11rem' }}>
            <div className="card-body cardOption">
              <img className="card-img" src={card.image} />
              <div className="boxCard">
                <p className="card-title">{card.name}</p>
                <p className="card-condition">
                  Состояние:
                  {' '}
                  {card.condition}
                </p>
                <p className="card-price">
                  {card.price}
                  ₽
                </p>
                <p className="noneId">{card.id}</p>
                <p className="noneUserId">{card.user_id}</p>
              </div>
              <button type="button" className="btn btn-outline-info btnSell">Продать</button>
            </div>
          </div>
        ))}
      </div>

      <form className="additem-form" action="/personalarea" method="post">
        <div className="register-form-container">
          <h1 className="form-title">
            Создать карту
          </h1>
          <div className="form-fields">
            <div className="form-field">
              <input type="text" name="title" className="form-control addCard" placeholder="Название карты" required />
            </div>
            <div className="form-field">
              <input type="number" name="price" className="form-control addCard" placeholder="0₽" required />
            </div>
            <div className="form-field">
              <input type="text" placeholder="https://spellmarket.ru/image/cache/catalog/cards/exp/en/20-245x341.jpg" required />
            </div>
            <div className="form-group">
              <input type="text" name="condition" className="form-control addCard" placeholder="Состояние SP/NM" required />
            </div>
          </div>
          <div className="form-buttons">
            <button className="btn btn-secondary button">Добавить</button>
          </div>
        </div>
      </form>

      {/* <div className="container h-100 addCardPersonalArea">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6 addCard">

            <form className="additem-form" action="/personalarea" method="post">
              <div className="form-group">
                <input type="text" name="title" className="form-control addCard" placeholder="Название карты" required />
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="number" name="price" className="form-control addCard" placeholder="0₽" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="link" className="form-control addCard" placeholder="https://spellmarket.ru/image/cache/catalog/cards/exp/en/20-245x341.jpg" required />
              </div>
              <div className="form-group">
                <input type="text" name="condition" className="form-control addCard" placeholder="Состояние SP/NM" required />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-secondary">add Card</button>
              </div>
            </form>

          </div>
        </div>
      </div> */}
    </Layout>
  );
};

// <Layout newUser={newUser}>
//       <div className="userInfo">
//         <h3>{ `${newUser}` }</h3>
//         <h3>{`${newUserCity}`}</h3>
//       </div>
//       <div className="cards">
//         {userCards.map((el) => (
//           <div className="card">
//             <div className="card-body" style={{ width: '11rem' }}>
//               <img className="cardImg" src= {el.image} />
//               <p className="cardName">{el.name}</p>
//               <p className="price">{el.price}₽</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Layout>
