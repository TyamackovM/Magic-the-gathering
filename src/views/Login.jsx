const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className='login-wrapper'>
      <h2 className="zalog">Войдите на сайт</h2>
      <hr />
      <form action="/login" method="POST" id="loginForm" className="logForm">
        <label htmlFor="exampleInput1" className="form-label exampleInp">Логин</label>
        <input name="login" type="text" className="form-control inpLoginReg" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label exampleInp">Пароль</label>
        <input name="password" type="text" className="form-control inpLoginReg" id="exampleInput2" />
        <button type="submit" className="btn btn-primary btnReg">Отправить</button>
      </form>
      </div>
    </Layout>
  );
};
