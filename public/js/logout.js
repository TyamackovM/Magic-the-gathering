const logout = document.getElementById('logout');

logout?.addEventListener('click', async (event) => {
  localStorage.setItem('count', '0');
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch('/logout', options);
  if (response.status === 200) {
    window.location = '/';
  } else {
    window.location = '/login';
  }
});
