const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');
const btnBuy = document.querySelector('.cart__btn-buy')

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
    renderCart();
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
};

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose();
    }
});

btnBuy.addEventListener('click', () => {
    prompt('Мы с вами свяжемся в ближайшее время. Введите свой телефон для обратной связи', '+375297270000');
    cartModalClose();
})