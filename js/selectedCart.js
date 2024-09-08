const cartItems = document.querySelectorAll('.cart-select');
const form = document.getElementById('form');

form.addEventListener('click', (e) => {
  selectCart();
  e.preventDefault;
});

function selectCart() {
  cartItems.forEach((cart) => {
    cart.classList.remove('active');
  });

  if (cartItems.length > 0) {
    cartItems[0].classList.add('active');
  }
}
