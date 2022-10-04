const React = require('react');
const Layout = require('./Layout');

module.exports = function MainTwo({ cards, newUser }) {
  return (
    <Layout newUser={newUser}>
      <div className="cardsContainer">
        {cards?.map((card) => (
          <div key={card.id} className="card" style={{ width: '11rem' }}>
            <div className="card-body">
              <img className = 'card-img' src = {card.image}/>
              <h3 className="card-title">{card.name}</h3>
              <h4 className="card-price">{card.price}</h4>
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
