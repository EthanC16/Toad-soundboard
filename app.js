const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.key.toUpperCase()}"]`);
  const key = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);
  if (!audio) return; 

  key.classList.add('active');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
      key.classList.remove('active');
  }, 100);
});

function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`);
  const keyElement = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
  if (!audio) return;

  keyElement.classList.add('active');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
      keyElement.classList.remove('active');
  }, 100);
}

window.addEventListener('keydown', function(event) {
  playSound(event.key);
});

keys.forEach(key => {
  key.addEventListener('click', function() {
      const keyAttribute = this.getAttribute('data-key');
      playSound(keyAttribute);
  });
});