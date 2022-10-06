const personalContainer = document.querySelector('.personalContainer');

personalContainer?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON' && event.target.innerHTML === 'Продать') {
    // personalContainer.removeChild(event.target.parentNode);
    const parentDiv = event.target.parentNode.parentNode;
    const id = parentDiv.querySelector('.noneId').innerText;
    const user_id = parentDiv.querySelector('.noneUserId').innerText;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, user_id }),
    };
    const response = await fetch('/ordersell', options);

    const result = await response.json();
    if (result.destroy === 'OK!') {
      personalContainer.removeChild(event.target.parentNode.parentNode);
      // console.log(personalContainer.event.target.parentNode.parentNode);
      // console.log(event.target.parentNode.parentNode.parentNode);
    }
  }
});
