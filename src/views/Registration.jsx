const React = require('react');
const Layout = require('./Layout');

module.exports = function Registr() {
  return (
    <Layout>
      <h2 className="zareg">Зарегистрируйтесь</h2>
      <hr />
      <form action="/registr" method="POST" id="loginForm" className="regForm">
        <label htmlFor="exampleInput1" className="form-label exampleInp">Логин</label>
        <input name="login" type="text" className="form-control inpLoginReg" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label exampleInp">Пароль</label>
        <input name="password" type="text" className="form-control inpLoginReg" id="exampleInput2" />
        {/* <label htmlFor="exampleInput2" className="form-label">Город</label>
        <input name="city" type="text" className="form-control" id="exampleInput2" /> */}
        <label htmlFor="exampleInput3" className="form-label exampleInp">Город</label>
        <select name="city" className="blockCity">
          <option value="">Выберите город...</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Челябинск">Челябинск</option>
        </select>
        <button type="submit" className="btn btn-primary btnReg">Отправить</button>
      </form>
    </Layout>
  );
};
