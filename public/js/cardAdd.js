const basketContainer = document.querySelector('.basketContainer');

basketContainer?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const parentDiv = event.target.parentNode;
    const cardName = parentDiv.querySelector('.card-title').innerText;
    const cardPrice = parentDiv.querySelector('.card-price').innerText;
    const cardImage = parentDiv.querySelector('.card-img').src;
    const cardCondition = parentDiv.querySelector('.card-condition').innerText;
    const id = parentDiv.querySelector('.noneId').innerText;
    // console.log(cardName);
    // console.log(cardPrice);
    // console.log(cardImage);
    // console.log(cardCondition);
    // console.log(cardName);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardName, cardPrice, cardImage, cardCondition, id }),
    };
    const response = await fetch('/cardadd', options);

    const result = await response.json();
    if (result.destroy === 'OK!') {
      basketContainer.removeChild(event.target.parentNode.parentNode);
      const countMin = localStorage.getItem('count') - 1;
      // console.log(countMin)
      localStorage.setItem('count', `${countMin}`);
    }
  }
});
