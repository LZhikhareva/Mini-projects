const down = document.querySelector('.volume-down');
const up = document.querySelector('.volume-up');
const volumeBar = document.querySelector('.volume-bar');
const rects = document.querySelectorAll('.volume-rect');
const indicator = document.querySelector('.indicator');

up.addEventListener('click', () => {
  indicator.textContent++;
  // Ensure the indicator doesn't go beyond the maximum volume
  if (parseInt(indicator.textContent) > rects.length) {
    indicator.textContent = rects.length;
  }
  // Add active class to the corresponding volume rects
  for (let i = 0; i < parseInt(indicator.textContent); i++) {
    rects[i].classList.add('volume-rect__active');
  }
});
down.addEventListener('click', () => {
  indicator.textContent--;
  // Ensure the indicator doesn't go below zero
  if (parseInt(indicator.textContent) < 0) {
    indicator.textContent = 0;
  }
  // Remove active class from the corresponding volume rects
  for (let i = parseInt(indicator.textContent); i < rects.length; i++) {
    rects[i].classList.remove('volume-rect__active');
  }
});
