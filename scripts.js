const toggleButton = document.getElementById('toggle-tema');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo) {
    body.classList.add(temaSalvo);
  }
});

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('tema', 'light-theme');
    toggleButton.textContent = '☀️';
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('tema', 'dark-theme');
    toggleButton.textContent = '🌙';
  }
});
