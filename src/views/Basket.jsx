const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>
        Нет карточек
      </h1>
    </Layout>
  );
};
