const React = require('react');
const Layout = require('./Layout');

module.exports = function MainTwo({ cards, newUser, newUserCity, newUserID }) {
  const citys = ['Москва', 2, 3, 4, 5];
  return (
    <Layout newUser={newUser}>
      {/* <script defer src="/js/basketAdd.js" /> */}
      <div className='main-page-header'>
        <h1>Рандомный заголовок</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Сортировка по городу
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            { citys.map((el) => (
              <li><a className="dropdown-item" href="#">{el}</a></li>
            ))}
            {/* <li><a className="dropdown-item" href="#">Санкт-Петербург</a></li>
             <li><a className="dropdown-item" href="#">Челябинск</a></li> */}
          </ul>
        </div>
      </div>
      <div className="cardsContainer">


      <div class="container">

<div class="slider" data-slider="itc-slider" data-loop="false">
  <div class="slider__wrapper">
    <div class="slider__items">
        
        
      {cards?.map((card) => (
      <div class="slider__item">
          <div key={card.id} className="card" style={{ width: '11rem' }}>
            <div className="card-body cardWrapper">
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
              <p className="card-city">
                  Город: Тест
              </p>
              </div>
              <button type="button" className="btn btn-outline-info btnBucket">В корзину</button>
            </div>
          </div>
      </div>
        ))}


    </div>
  </div>
  <button class="slider__control" data-slide="prev"></button>
  <button class="slider__control" data-slide="next"></button>
</div>

</div>

        
      </div>

    </Layout>
  );
};

// const React = require('react');
// const Layout = require('./Layout');

// function Tasks({ tasks }) {
//   // console.log(tasks);
//   return (
//     <Layout>
//       <div className="mainDiv">
//         {tasks?.map((task) => (
//           <div key={task.id} className="card" style={{ width: '11rem' }}>
//             <div className="card-body">
//               <h3 className="card-title">{task.title}</h3>
//               <h4 className="card-text">{task.body}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// }
// module.exports = Tasks;

// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.findAll({ raw: true });
//     renderTemplate(Tasks, { tasks }, res);
//   } catch (error) {
//     console.log(error);
//   }
// });
