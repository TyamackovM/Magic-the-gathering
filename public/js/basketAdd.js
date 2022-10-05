const cardsContainer = document.querySelector('.cardsContainer');
const basketWraper = document.querySelector('.basketWraper');
const round = document.querySelector('.round');
round.innerText = localStorage.getItem('count');

cardsContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const parentDiv = event.target.parentNode;
    const cardName = parentDiv.querySelector('.card-title').innerText;
    const cardId = parentDiv.querySelector('.noneId').innerText;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardName, cardId }),
    };
    const response = await fetch('/basketadd', options);

    const result = await response.json();
    if (result.create = 'OK!') {
      // const parentBasket = event.target.parentNode;
      // const zero = parentBasket.querySelector('.round');
      round.innerText = +round.innerText + 1;
      localStorage.setItem('count', `${round.innerText}`);
      // roundResult.appendChild()
    }
  }
});
