const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser, newUserID, newUserCity }) {
  return (
    <Layout newUser={newUser}>
      <h1>
        Hello user!
        {' '}
        { newUser }
      </h1>
    </Layout>
  );
};
