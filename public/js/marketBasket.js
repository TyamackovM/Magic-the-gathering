const marketContainer = document.querySelector('.marketContainer');
const roundThree = document.querySelector('.round');
roundThree.innerText = localStorage.getItem('count');

marketContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    const parentDiv = event.target.parentNode.parentNode;
    const idCard = parentDiv.querySelector('.noneId').innerText;
    const id = parentDiv.querySelector('.noneIds').innerText;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idCard, id }),
    };

    const response = await fetch('/marketbasket', options);
    

    const result = await response.json();
    if (result.destroy === 'OK!') {
      marketContainer.removeChild(event.target.parentNode.parentNode);
      roundThree.innerText = +roundThree.innerText + 1;
      localStorage.setItem('count', `${roundThree.innerText}`);
    }
  }
});
