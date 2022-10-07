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
        <input name="password" type="password" className="form-control inpLoginReg" id="exampleInput2" />
        {/* <label htmlFor="exampleInput2" className="form-label">Город</label> */}
        {/* <input name="city" type="text" className="form-control" id="exampleInput2" /> */}
        <label htmlFor="exampleInput3" className="form-label exampleInp">Город</label>
        <select name="city" className="blockCity">
          <option value="">Выберите город...</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Челябинск">Челябинск</option>
          <option value="Борисоглебск">Борисоглебск</option>
          <option value="Боровичи">Боровичи</option>
          <option value="Братск">Братск</option>
          <option value="Брянск">Брянск</option>
          <option value="Бугульма">Бугульма</option>
          <option value="Буденновск">Буденновск</option>
          <option value="Бузулук">Бузулук</option>
          <option value="Буйнакск">Буйнакск</option>
          <option value="Великие Луки">Великие Луки</option>
          <option value="Великий Новгород">Великий Новгород</option>
          <option value="Верхняя Пышма">Верхняя Пышма</option>
          <option value="Видное">Видное</option>
          <option value="Владивосток">Владивосток</option>
          <option value="Владикавказ">Владикавказ</option>
          <option value="Владимир">Владимир</option>
          <option value="Волгоград">Волгоград</option>
          <option value="Волгодонск">Волгодонск</option>
          <option value="Волжск">Волжск</option>
          <option value="Волжский">Волжский</option>
          <option value="Вологда">Вологда</option>
          <option value="Вольск">Вольск</option>
          <option value="Воркута">Воркута</option>
          <option value="Воронеж">Воронеж</option>
          <option value="Воскресенск">Воскресенск</option>
          <option value="Воткинск">Воткинск</option>
          <option value="Всеволожск">Всеволожск</option>
          <option value="Выборг">Выборг</option>
          <option value="Выкса">Выкса</option>
          <option value="Вязьма">Вязьма</option>
          <option value="Гатчина">Гатчина</option>
          <option value="Геленджик">Геленджик</option>
          <option value="Георгиевск">Георгиевск</option>
          <option value="Глазов">Глазов</option>
          <option value="Горно-Алтайск">Горно-Алтайск</option>
          <option value="Грозный">Грозный</option>
          <option value="Губкин">Губкин</option>
          <option value="Гудермес">Гудермес</option>
          <option value="Гуково">Гуково</option>
          <option value="Гусь-Хрустальный">Гусь-Хрустальный</option>
          <option value="Дербент">Дербент</option>
          <option value="Дзержинск">Дзержинск</option>
          <option value="Димитровград">Димитровград</option>
          <option value="Дмитров">Дмитров</option>
          <option value="Долгопрудный">Долгопрудный</option>
          <option value="Домодедово">Домодедово</option>
          <option value="Донской">Донской</option>
          <option value="Дубна">Дубна</option>
          <option value="Евпатория">Евпатория</option>
          <option value="Егорьевск">Егорьевск</option>
          <option value="Ейск">Ейск</option>
          <option value="Екатеринбург">Екатеринбург</option>
          <option value="Елабуга">Елабуга</option>
          <option value="Елец">Елец</option>
          <option value="Ессентуки">Ессентуки</option>
          <option value="Железногорск (Красноярский край)">Железногорск (Красноярский край)</option>
          <option value="Железногорск (Курская область)">Железногорск (Курская область)</option>
          <option value="Жигулевск">Жигулевск</option>
          <option value="Жуковский">Жуковский</option>
          <option value="Заречный">Заречный</option>
          <option value="Зеленогорск">Зеленогорск</option>
          <option value="Зеленодольск">Зеленодольск</option>
          <option value="Златоуст">Златоуст</option>
          <option value="Иваново">Иваново</option>
          <option value="Ивантеевка">Ивантеевка</option>
          <option value="Ижевск">Ижевск</option>
          <option value="Избербаш">Избербаш</option>
          <option value="Иркутск">Иркутск</option>
          <option value="Искитим">Искитим</option>
          <option value="Ишим">Ишим</option>
          <option value="Ишимбай">Ишимбай</option>
          <option value="Йошкар-Ола">Йошкар-Ола</option>
          <option value="Казань">Казань</option>
          <option value="Калининград">Калининград</option>
          <option value="Калуга">Калуга</option>
          <option value="Каменск-Уральский">Каменск-Уральский</option>
          <option value="Каменск-Шахтинский">Каменск-Шахтинский</option>
          <option value="Камышин">Камышин</option>
          <option value="Канск">Канск</option>
        </select>
        <button type="submit" className="btn btn-primary btnReg">Отправить</button>
      </form>
    </Layout>
  );
};
