const getLocalStorage = () => JSON.parse(localStorage.getItem('cart-techstore')) || [];


const setLocalStorage = data => localStorage.setItem('cart-techstore', JSON.stringify(data));

const renderCart = () => {
        cartListGoods.textContent = '';

        const cartItems = getLocalStorage();

        let totalPrice = 0;

        cartItems.forEach((item, i) => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `   
       <td>${i+1}</td>
       <td>${item.brand} ${item.name}</td>
       ${item.color ? `<td>${item.color}</td>` : '<td>-</td>'}
       ${item.size ? `<td>${item.size}</td>` : '<td>-</td>'}       
       <td>${item.cost} &#8381;</td>
       <td><button class="btn-delete" data-id = "${item.id}">&times;</button></td>    
    `;

    totalPrice += item.cost;

    cartListGoods.append(tr);
  })

  cartTotalCost.textContent = totalPrice + ' ₽';
}

const deleteItemCart = id => {
  const cartItems = getLocalStorage();
  const newCartItems = cartItems.filter(item => item.id != id);
  setLocalStorage(newCartItems);
}

cartListGoods.addEventListener('click', e => {
  if (e.target.matches('.btn-delete')) {
    deleteItemCart(e.target.dataset.id);
    renderCart();
  }
})


const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  })
};