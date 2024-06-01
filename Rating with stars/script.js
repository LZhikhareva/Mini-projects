// Collecting all the stars
const stars = document.querySelectorAll('.star');

// Main logic
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('star_active'));
        const activeStars = [...stars].slice(0, index + 1);
        activeStars.forEach((s) => s.classList.add('star_active'));
    })
})
