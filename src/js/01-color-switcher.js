const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
