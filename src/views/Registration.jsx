const React = require('react');
const Layout = require('./Layout');

module.exports = function Registr() {
  return (
    <Layout>
        <h2>Зарегистрируйтесь</h2>
      <hr />
      <form action="/registr" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Логин</label>
        <input name="login" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Пароль</label>
        <input name="password" type="text" className="form-control" id="exampleInput2" />
        <label htmlFor="exampleInput2" className="form-label">Город</label>
        <input name="city" type="text" className="form-control" id="exampleInput2" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
    </Layout>
  );
};
