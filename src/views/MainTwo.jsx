const React = require('react');
const Layout = require('./Layout');

module.exports = function MainTwo({ cards, newUser, newUserCity, newUserID }) {
  return (
    <Layout newUser={newUser}>
      {/* <script defer src="/js/basketAdd.js" /> */}
      <div className="cardsContainer">
        {cards?.map((card) => (
          <div key={card.id} className="card" style={{ width: '11rem' }}>
            <div className="card-body">
              <img className="card-img" src={card.image} />
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
              <button type="button" className="btn btn-outline-info">В корзину</button>
            </div>
          </div>
        ))}
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
