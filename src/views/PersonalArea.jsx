const React = require('react');
const Layout = require('./Layout');

module.exports = function PersonalArea({ newUser, newUserCity, userCards }) {
  return (
    <Layout newUser={newUser}>
      <div className="userInfo">
        <h3>{ `${newUser}` }</h3>
        <h3>{`${newUserCity}`}</h3>
      </div>
      <div className="cardsContainer">
        {userCards.map((card) => (
        <div key={card.id} className="card" style={{ width: '11rem' }}>
          <div className="card-body">
            <img className="card-img" src={card.image} />
            <p className="card-title">{card.name}</p>
            <p className='card-condition'>Состояние: {card.condition}</p>
            <p className="card-price">{card.price}₽</p>
          </div>
       </div>
        ))}
      </div>
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
