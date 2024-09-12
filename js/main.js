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
  const cartBtn01 = document.getElementById('cart-btn01');
  const cartContainer01 = document.getElementById('cart-container01');
  const cartIconSelect01 = document.getElementById('icon-cart-01');
  const cartTextSelect01 = document.getElementById('text-cart-01');
  const cartIncrement01 = document.getElementById('select-increment-01');
  const cartDecrement01 = document.getElementById('select-decrement-01');

  const cartBtn02 = document.getElementById('cart-btn02');
  const cartContainer02 = document.getElementById('cart-container02');
  const cartIconSelect02 = document.getElementById('icon-cart-02');
  const cartTextSelect02 = document.getElementById('text-cart-02');
  const cartIncrement02 = document.getElementById('select-increment-02');
  const cartDecrement02 = document.getElementById('select-decrement-02');

  const cartBtn03 = document.getElementById('cart-btn03');
  const cartContainer03 = document.getElementById('cart-container03');
  const cartIconSelect03 = document.getElementById('icon-cart-03');
  const cartTextSelect03 = document.getElementById('text-cart-03');
  const cartIncrement03 = document.getElementById('select-increment-03');
  const cartDecrement03 = document.getElementById('select-decrement-03');

  const cartBtn04 = document.getElementById('cart-btn04');
  const cartContainer04 = document.getElementById('cart-container04');
  const cartIconSelect04 = document.getElementById('icon-cart-04');
  const cartTextSelect04 = document.getElementById('text-cart-04');
  const cartIncrement04 = document.getElementById('select-increment-04');
  const cartDecrement04 = document.getElementById('select-decrement-04');

  const cartBtn06 = document.getElementById('cart-btn06');
  const cartContainer06 = document.getElementById('cart-container06');
  const cartIconSelect06 = document.getElementById('icon-cart-06');
  const cartTextSelect06 = document.getElementById('text-cart-06');
  const cartIncrement06 = document.getElementById('select-increment-06');
  const cartDecrement06 = document.getElementById('select-decrement-06');

  const cartBtn05 = document.getElementById('cart-btn05');
  const cartContainer05 = document.getElementById('cart-container05');
  const cartIconSelect05 = document.getElementById('icon-cart-05');
  const cartTextSelect05 = document.getElementById('text-cart-05');
  const cartIncrement05 = document.getElementById('select-increment-05');
  const cartDecrement05 = document.getElementById('select-decrement-05');

  const cartBtn07 = document.getElementById('cart-btn07');
  const cartContainer07 = document.getElementById('cart-container07');
  const cartIconSelect07 = document.getElementById('icon-cart-07');
  const cartTextSelect07 = document.getElementById('text-cart-07');
  const cartIncrement07 = document.getElementById('select-increment-07');
  const cartDecrement07 = document.getElementById('select-decrement-07');

  const cartBtn08 = document.getElementById('cart-btn08');
  const cartContainer08 = document.getElementById('cart-container08');
  const cartIconSelect08 = document.getElementById('icon-cart-08');
  const cartTextSelect08 = document.getElementById('text-cart-08');
  const cartIncrement08 = document.getElementById('select-increment-08');
  const cartDecrement08 = document.getElementById('select-decrement-08');

  const cartBtn09 = document.getElementById('cart-btn09');
  const cartContainer09 = document.getElementById('cart-container09');
  const cartIconSelect09 = document.getElementById('icon-cart-09');
  const cartTextSelect09 = document.getElementById('text-cart-09');
  const cartIncrement09 = document.getElementById('select-increment-09');
  const cartDecrement09 = document.getElementById('select-decrement-09');
  if (cartBtn01) {
    cartBtn01.addEventListener('click', () => {
      cartContainer01.classList.add('border-2', 'border-red-400');
      cartBtn01.classList.add('bg-primary_1', 'justify-between');
      cartBtn01.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect01.classList.add('hidden');
      cartTextSelect01.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement01.classList.remove('hidden');
      cartDecrement01.classList.remove('hidden');

      let cartQty01 = JSON.parse(localStorage.getItem('productsInCart'));
      if (cartQty01) {
        Object.values(cartQty01).forEach((item01) => {
          cartTextSelect01.textContent = item01.inCart;
          console.log('cart qty is 01', item01.inCart);
        });
      }
    });
  }

  if (cartBtn02) {
    cartBtn02.addEventListener('click', () => {
      cartContainer02.classList.add('border-2', 'border-red-400');
      cartBtn02.classList.add('bg-primary_1', 'justify-between');
      cartBtn02.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect02.classList.add('hidden');
      cartTextSelect02.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement02.classList.remove('hidden');
      cartDecrement02.classList.remove('hidden');

      let cartQty02 = JSON.parse(localStorage.getItem('productsInCart'));
      if (cartQty02) {
        Object.values(cartQty02).forEach((item02) => {
          cartTextSelect02.textContent = item02.inCart;
          console.log('cart qty is 02', item02.inCart);
        });
      }
    });
  }

  if (cartBtn03) {
    cartBtn03.addEventListener('click', () => {
      cartContainer03.classList.add('border-2', 'border-red-400');
      cartBtn03.classList.add('bg-primary_1', 'justify-between');
      cartBtn03.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect03.classList.add('hidden');
      cartTextSelect03.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement03.classList.remove('hidden');
      cartDecrement03.classList.remove('hidden');
    });
  }

  if (cartBtn04) {
    cartBtn04.addEventListener('click', () => {
      cartContainer04.classList.add('border-2', 'border-red-400');
      cartBtn04.classList.add('bg-primary_1', 'justify-between');
      cartBtn04.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect04.classList.add('hidden');
      cartTextSelect04.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement04.classList.remove('hidden');
      cartDecrement04.classList.remove('hidden');
    });
  }

  if (cartBtn05) {
    cartBtn05.addEventListener('click', () => {
      cartContainer05.classList.add('border-2', 'border-red-400');
      cartBtn05.classList.add('bg-primary_1', 'justify-between');
      cartBtn05.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect05.classList.add('hidden');
      cartTextSelect05.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement05.classList.remove('hidden');
      cartDecrement05.classList.remove('hidden');
    });
  }

  if (cartBtn06) {
    cartBtn06.addEventListener('click', () => {
      cartContainer06.classList.add('border-2', 'border-red-400');
      cartBtn06.classList.add('bg-primary_1', 'justify-between');
      cartBtn06.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect06.classList.add('hidden');
      cartTextSelect06.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement06.classList.remove('hidden');
      cartDecrement06.classList.remove('hidden');
    });
  }

  if (cartBtn07) {
    cartBtn07.addEventListener('click', () => {
      cartContainer07.classList.add('border-2', 'border-red-400');
      cartBtn07.classList.add('bg-primary_1', 'justify-between');
      cartBtn07.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect07.classList.add('hidden');
      cartTextSelect07.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement07.classList.remove('hidden');
      cartDecrement07.classList.remove('hidden');
    });
  }

  if (cartBtn08) {
    cartBtn08.addEventListener('click', () => {
      cartBtn08.classList.add('bg-primary_1', 'justify-between');
      cartBtn08.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect08.classList.add('hidden');
      cartTextSelect08.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement08.classList.remove('hidden');
      cartDecrement08.classList.remove('hidden');
    });
  }

  if (cartBtn09) {
    cartBtn09.addEventListener('click', () => {
      cartContainer09.classList.add('border-2', 'border-red-400');
      cartBtn09.classList.add('bg-primary_1', 'justify-between');
      cartBtn09.classList.remove('bg-secondary_50', 'justify-center');
      cartIconSelect09.classList.add('hidden');
      cartTextSelect09.classList.add('font-semibold', 'text-secondary_50');
      cartIncrement09.classList.remove('hidden');
      cartDecrement09.classList.remove('hidden');
    });
  }
}

onLoadCartNumbers();
displayCart();
cartSelected();
