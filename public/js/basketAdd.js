const cardsContainer = document.querySelector('.cardsContainer');
console.log(cardsContainer);
console.log('етэ')

cardsContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    console.log(123);
  }
});
