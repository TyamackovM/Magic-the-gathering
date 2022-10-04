const React = require('react');
const Layout = require('./Layout');

module.exports = function PersonalArea({ newUser, newUserCity, newUserID, userCards }) {
  console.log(newUserID);
  return (
    <Layout newUser={newUser}>
      <div className="userInfo">
        <h3>{ `${newUser}` }</h3>
        <h3>{`${newUserCity}`}</h3>
      </div>
      <div className="cards">
        {userCards.map((el) => (
          <div className="card">
            {/* <img src= {el.image} /> */}
            <p className="cardName">{el.name}</p>
            <p className="price">{el.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
