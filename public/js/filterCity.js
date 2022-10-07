const dropBtn = document.querySelector('.dropdown');
const marketContainerTwo = document.querySelector('.marketContainer');

dropBtn.addEventListener('click', async (event) => {
  // console.log(event.target.classList);
  // console.log(event.target.classList.contains('dropdown-item'));
  if (event.target.classList.contains('dropdown-item')) {
    const cityFind = event.target.innerText;
    // console.log(cityFind);
    marketContainerTwo.innerHTML = '';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cityFind }),
    };
    const response = await fetch('/market', options);

    // console.log(response);

    const result = await response.json();
    // console.log(result);

    const divFinal = result?.map((card) => (`<div key=${card.idUser} class="card cardPC" style={{ width: '12rem' }}>
    <div class="card-body cardWrapper cardPCstyles">
      <img class="card-img" src=${card.image} />
      <div class="boxCard">
        <p class="card-title">${card.name}</p>
        <p class="noneId">${card.id}</p>
        <p class="noneIds">${card.idUser}</p>
        <p class="card-condition">
          Состояние:
          ${' '}
          ${card.condition}
        </p>
        <p class="card-price">
          ${card.price}
          ₽
        </p>
      </div>
      <button type="button" class="btn btn-outline-info btnBucket">В корзину</button>
    </div>
  </div> `));

    marketContainerTwo.innerHTML = divFinal;
    // marketContainerTwo.innerHTML = `
    //     { result?.map((card) => (
    //       <div key={card.idUser} className="card cardPC" style={{ width: '12rem' }}>
    //         <div className="card-body cardWrapper cardPCstyles">
    //           <img className="card-img" src={card.image} />
    //           <div className="boxCard">
    //             <p className="card-title">{card.name}</p>
    //             <p className="noneId">{card.id}</p>
    //             <p className="noneIds">{card.idUser}</p>
    //             <p className="card-condition">
    //               Состояние:
    //               {' '}
    //               {card.condition}
    //             </p>
    //             <p className="card-price">
    //               {card.price}
    //               ₽
    //             </p>
    //           </div>
    //           <button type="button" className="btn btn-outline-info btnBucket">В корзину</button>
    //         </div>
    //       </div>
    //     ))} `;
  }
});
