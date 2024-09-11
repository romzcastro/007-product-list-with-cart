let carts = document.querySelectorAll('.cart-btn');
let products = [
  {
    image: {
      thumbnail: './assets/images/image-waffle-thumbnail.jpg',
      mobile: './assets/images/image-waffle-mobile.jpg',
      tablet: './assets/images/image-waffle-tablet.jpg',
      desktop: './assets/images/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
      mobile: './assets/images/image-creme-brulee-mobile.jpg',
      tablet: './assets/images/image-creme-brulee-tablet.jpg',
      desktop: './assets/images/image-creme-brulee-desktop.jpg',
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-macaron-thumbnail.jpg',
      mobile: './assets/images/image-macaron-mobile.jpg',
      tablet: './assets/images/image-macaron-tablet.jpg',
      desktop: './assets/images/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      mobile: './assets/images/image-tiramisu-mobile.jpg',
      tablet: './assets/images/image-tiramisu-tablet.jpg',
      desktop: './assets/images/image-tiramisu-desktop.jpg',
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-baklava-thumbnail.jpg',
      mobile: './assets/images/image-baklava-mobile.jpg',
      tablet: './assets/images/image-baklava-tablet.jpg',
      desktop: './assets/images/image-baklava-desktop.jpg',
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-meringue-thumbnail.jpg',
      mobile: './assets/images/image-meringue-mobile.jpg',
      tablet: './assets/images/image-meringue-tablet.jpg',
      desktop: './assets/images/image-meringue-desktop.jpg',
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-cake-thumbnail.jpg',
      mobile: './assets/images/image-cake-mobile.jpg',
      tablet: './assets/images/image-cake-tablet.jpg',
      desktop: './assets/images/image-cake-desktop.jpg',
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-brownie-thumbnail.jpg',
      mobile: './assets/images/image-brownie-mobile.jpg',
      tablet: './assets/images/image-brownie-tablet.jpg',
      desktop: './assets/images/image-brownie-desktop.jpg',
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
    inCart: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
      mobile: './assets/images/image-panna-cotta-mobile.jpg',
      tablet: './assets/images/image-panna-cotta-tablet.jpg',
      desktop: './assets/images/image-panna-cotta-desktop.jpg',
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    inCart: 0,
  },
  ,
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    displayCart();
    event.preventDefault();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(products) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(products);
}

function setItems(products) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[products.name] == undefined) {
      cartItems = {
        ...cartItems,
        [products.name]: products,
      };
    }
    cartItems[products.name].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.name]: products,
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(products) {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost + products.price);
  } else {
    localStorage.setItem('totalCost', products.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productsContainer = document.querySelector('.product-header');
  let cartCost = localStorage.getItem('totalCost');
  if (cartItems && productsContainer) {
    productsContainer.innerHTML = '';
    Object.values(cartItems).map((item) => {
      productsContainer.innerHTML += `
      <div class="products flex flex-col">
        <h3 class="product-title font-bold text-secondary_900">${item.name}</h3>
          <div class="flex items-center justify-between border-b-2 border-secondary_100 pb-6">
        <div class="flex gap-3 items-center">
          <p class="product-qty font-bold text-primary_1">${
            item.inCart
          }<span>x</span></p>
          <p class="product-price text-secondary_400"><span>@</span>${
            item.price
          }0</p>
          <p class="product-total text-secondary_500 font-bold">$${
            item.inCart * item.price
          }</p>
        </div>
      <div>
        <figure class="border-2 border-secondary_300 p-1 rounded-full">
          <img src="./assets/images/icon-remove-item.svg" alt="icon-remove-item"/>
        </figure>
      </div>
      `;
    });

    productsContainer.innerHTML += `
          <div class="products-total font-medium flex justify-between py-6 items-center">
            <p>Order Total</p>
            <p class="font-bold text-2xl">$${cartCost}0</p>
          </div>`;
  }
}

function cartSelected() {
  const cartContainer = document.querySelector('.cart-container');
  const cartBtnSelect = document.getElementById('select-button-01');
  const cartIconSelect = document.getElementById('icon-cart-01');
  const cartTextSelect = document.getElementById('text-cart-01');
  const cartIncrement = document.getElementById('select-increment-01');
  const cartDecrement = document.getElementById('select-decrement-01');

  cartBtnSelect.addEventListener('click', () => {
    cartContainer.classList.add('border-2', 'border-red-400');
    cartBtnSelect.classList.add('bg-primary_1');
    cartBtnSelect.classList.add('justify-between');
    cartBtnSelect.classList.remove('bg-secondary_50');
    cartBtnSelect.classList.remove('justify-center');
    cartIconSelect.classList.add('hidden');
    cartTextSelect.classList.add('font-semibold', 'text-secondary_50');
    cartIncrement.classList.remove('hidden');
    cartDecrement.classList.remove('hidden');

    // Retrieve cart items from localStorage
    const cartItems = localStorage.getItem('productsInCart');
    const productsInCart = cartItems ? JSON.parse(cartItems) : {};

    // Display the inCart value for the first product in the cart
    const firstProduct = Object.values(productsInCart)[0];
    const inCartValue = firstProduct ? firstProduct.inCart : 0;

    // Update the text content of text-cart-01 with the inCart value
    if (cartTextSelect) {
      cartTextSelect.textContent = inCartValue;
    }
  });
}

function cartSelected02() {
  const cartContainer = document.querySelector('.cart-container');
  const cartBtnSelect2 = document.getElementById('select-button-02');
  const cartIconSelect2 = document.getElementById('icon-cart-02');
  const cartTextSelect2 = document.getElementById('text-cart-02');
  const cartIncrement2 = document.getElementById('select-increment-02');
  const cartDecrement2 = document.getElementById('select-decrement-02');

  let productIndex = 1;

  cartBtnSelect2.addEventListener('click', () => {
    cartContainer.classList.add('border-2', 'border-red-400');
    cartBtnSelect2.classList.add('bg-primary_1');
    cartBtnSelect2.classList.add('justify-between');
    cartBtnSelect2.classList.remove('bg-secondary_50');
    cartBtnSelect2.classList.remove('justify-center');
    cartIconSelect2.classList.add('hidden');
    cartTextSelect2.classList.add('font-semibold', 'text-secondary_50');
    cartIncrement2.classList.remove('hidden');
    cartDecrement2.classList.remove('hidden');

    // Retrieve updated cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    // Check if cartItems exist, and retrieve the product with the correct index (for example, index 1)
    let productName = products[1].name; // Assuming you want the 2nd product, change this index as needed.
    if (cartItems && cartItems[productName]) {
      // Display the current inCart value for this product
      cartTextSelect2.textContent = cartItems[productName].inCart;
    } else {
      // If the product is not in the cart, default to 0
      cartTextSelect2.textContent = 0;
    }
  });
}

function cartSelected03() {
  const cartContainer = document.querySelector('.cart-container');
  const cartBtnSelect3 = document.getElementById('select-button-03');
  const cartIconSelect3 = document.getElementById('icon-cart-03');
  const cartTextSelect3 = document.getElementById('text-cart-03');
  const cartIncrement3 = document.getElementById('select-increment-03');
  const cartDecrement3 = document.getElementById('select-decrement-03');

  let productIndex = 1;

  cartBtnSelect3.addEventListener('click', () => {
    cartContainer.classList.add('border-2', 'border-red-400');
    cartBtnSelect3.classList.add('bg-primary_1');
    cartBtnSelect3.classList.add('justify-between');
    cartBtnSelect3.classList.remove('bg-secondary_50');
    cartBtnSelect3.classList.remove('justify-center');
    cartIconSelect3.classList.add('hidden');
    cartTextSelect3.classList.add('font-semibold', 'text-secondary_50');
    cartIncrement3.classList.remove('hidden');
    cartDecrement3.classList.remove('hidden');

    // Retrieve updated cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    // Check if cartItems exist, and retrieve the product with the correct index (for example, index 1)
    let productName = products[1].name; // Assuming you want the 2nd product, change this index as needed.
    if (cartItems && cartItems[productName]) {
      // Display the current inCart value for this product
      cartTextSelect3.textContent = cartItems[productName].inCart;
    } else {
      // If the product is not in the cart, default to 0
      cartTextSelect3.textContent = 0;
    }
  });
}

onLoadCartNumbers();
displayCart();
cartSelected();
cartSelected02();
cartSelected03();
