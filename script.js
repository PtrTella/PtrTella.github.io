// Fun micro animation on button click
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => button.classList.remove('clicked'), 200);
});

// Confetti effect (just for fun!)
function launchConfetti() {
  const colors = ['#ffcc00', '#ffffff', '#ffd700'];
  for (let i = 0; i < 30; i++) {
    const confetto = document.createElement('div');
    confetto.className = 'confetto';
    confetto.style.left = `${Math.random() * 100}%`;
    confetto.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetto.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(confetto);
    setTimeout(() => confetto.remove(), 3000);
  }
}

button.addEventListener('mouseover', launchConfetti);
