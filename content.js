function createToggleButton() {
  const button = document.createElement('button');
  button.id = 'dark-mode-toggle';
  button.textContent = '🌓';
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  document.body.appendChild(button);
}

createToggleButton();