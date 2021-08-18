const headerCityButton = document.querySelector('.header__city-button');
const cartListGoods = document.querySelector('.cart__list-goods');
const cartTotalCost = document.querySelector('.cart__total-cost');
let hash = location.hash.substring(1);


headerCityButton.textContent = localStorage.getItem('techstore-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите Ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('techstore-location', city);
});