const value = document.querySelector('.dropdown__value');
const dropdown = document.querySelector('.dropdown')
const menu = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
    menu.classList.toggle('dropdown__list_active')
})


items.forEach(item => item.addEventListener('click', (item) => {
    menu.classList.remove('dropdown__list_active');
    item.preventDefault();
    value.textContent = item.target.textContent;
})
)

