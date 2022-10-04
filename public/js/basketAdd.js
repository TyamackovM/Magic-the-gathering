const cardsContainer = document.querySelector('.cardsContainer');

cardsContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const parentDiv = event.target.parentNode;
    const cardName = parentDiv.querySelector('.card-title').innerText;
    console.log(cardName);
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardName }),
    };
    const response = await fetch('/basketadd', options);

  }
});
