'use strict';
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
];

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

// function onLoadQty() {
//   let cartItems = localStorage.getItem('productsInCart');
//   if (cartItems) {
//     cartItems = JSON.parse(cartItems);

//     // Loop through products to display their inCart values
//     products.forEach((product, index) => {
//       const productName = product.name;
//       const cartProduct = cartItems[productName];

//       if (cartProduct) {
//         const selectText = document.getElementById(`text-cart-0${index + 1}`);
//         if (selectText) {
//           selectText.textContent = `${cartProduct.inCart}`; // Update displayed quantity
//         }
//       }
//     });
//   }
// }

function onLoadCartQty() {
  let incrementItems = [
    { increment: 'select-increment-01', text: 'text-cart-01' },
    { increment: 'select-increment-02', text: 'text-cart-02' },
    { increment: 'select-increment-03', text: 'text-cart-03' },
    { increment: 'select-increment-04', text: 'text-cart-04' },
    { increment: 'select-increment-05', text: 'text-cart-05' },
    { increment: 'select-increment-06', text: 'text-cart-06' },
    { increment: 'select-increment-07', text: 'text-cart-07' },
    { increment: 'select-increment-08', text: 'text-cart-08' },
    { increment: 'select-increment-09', text: 'text-cart-09' },
  ];

  incrementItems.forEach((item) => {
    const selectbtnInc = document.getElementById(item.increment);
    const selectText = document.getElementById(item.text);

    if (selectbtnInc && selectText) {
      let cartItems = localStorage.getItem('productsInCart');
      if (cartItems) {
        cartItems = JSON.parse(cartItems);

        // Loop through products to display their inCart values
        products.forEach((product, index) => {
          const productName = product.name;
          const cartProduct = cartItems[productName];

          if (cartProduct) {
            const selectText = document.getElementById(
              `text-cart-0${index + 1}`
            );
            if (selectText) {
              selectText.textContent = `${cartProduct.inCart}`; // Update displayed quantity
            }
          }
        });
      }
    }
  });
}

// function onLoadCartQty() {
//   let incrementItems = [
//     { increment: 'select-increment-01', text: 'text-cart-01' },
//     { increment: 'select-increment-02', text: 'text-cart-02' },
//     { increment: 'select-increment-03', text: 'text-cart-03' },
//     { increment: 'select-increment-04', text: 'text-cart-04' },
//     { increment: 'select-increment-05', text: 'text-cart-05' },
//     { increment: 'select-increment-06', text: 'text-cart-06' },
//     { increment: 'select-increment-07', text: 'text-cart-07' },
//     { increment: 'select-increment-08', text: 'text-cart-08' },
//     { increment: 'select-increment-09', text: 'text-cart-09' },
//   ];

//   incrementItems.forEach((item, index) => {
//     const selectbtnInc = document.getElementById(item.increment);
//     const selectText = document.getElementById(item.text);

//     if (selectbtnInc) {
//       selectbtnInc.addEventListener('click', () => {
//         let cartItems = localStorage.getItem('productsInCart');
//         cartItems = JSON.parse(cartItems);

//         if (cartItems) {
//           const product = cartItems[products[index].name];

//           let cartItems = localStorage.getItem('productsInCart');
//           if (cartItems) {
//             cartItems = JSON.parse(cartItems);
//             const productName = products[index].name;
//             const product = cartItems[productName];
//             if (product) {
//               selectText.textContent = `${product.inCart}`; // Update displayed quantity
//             }
//           } else {
//           }
//         }
//       });
//     }
//   });
// }

let cartsIncrement = document.querySelectorAll('.cart-btn-increment');

for (let i = 0; i < cartsIncrement.length; i++) {
  cartsIncrement[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    displayCart();
  });
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

    if (!cartItems[products.name].inCart) {
      cartItems[products.name].inCart = 0;
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
  const cartItems = [
    {
      btn: 'cart-btn01',
      container: 'cart-container01',
      icon: 'icon-cart-01',
      text: 'text-cart-01',
      increment: 'select-increment-01',
      decrement: 'select-decrement-01',
    },
    {
      btn: 'cart-btn02',
      container: 'cart-container02',
      icon: 'icon-cart-02',
      text: 'text-cart-02',
      increment: 'select-increment-02',
      decrement: 'select-decrement-02',
    },
    {
      btn: 'cart-btn03',
      container: 'cart-container03',
      icon: 'icon-cart-03',
      text: 'text-cart-03',
      increment: 'select-increment-03',
      decrement: 'select-decrement-03',
    },
    {
      btn: 'cart-btn04',
      container: 'cart-container04',
      icon: 'icon-cart-04',
      text: 'text-cart-04',
      increment: 'select-increment-04',
      decrement: 'select-decrement-04',
    },
    {
      btn: 'cart-btn05',
      container: 'cart-container05',
      icon: 'icon-cart-05',
      text: 'text-cart-05',
      increment: 'select-increment-05',
      decrement: 'select-decrement-05',
    },
    {
      btn: 'cart-btn06',
      container: 'cart-container06',
      icon: 'icon-cart-06',
      text: 'text-cart-06',
      increment: 'select-increment-06',
      decrement: 'select-decrement-06',
    },
    {
      btn: 'cart-btn07',
      container: 'cart-container07',
      icon: 'icon-cart-07',
      text: 'text-cart-07',
      increment: 'select-increment-07',
      decrement: 'select-decrement-07',
    },
    {
      btn: 'cart-btn08',
      container: 'cart-container08',
      icon: 'icon-cart-08',
      text: 'text-cart-08',
      increment: 'select-increment-08',
      decrement: 'select-decrement-08',
    },
    {
      btn: 'cart-btn09',
      container: 'cart-container09',
      icon: 'icon-cart-09',
      text: 'text-cart-09',
      increment: 'select-increment-09',
      decrement: 'select-decrement-09',
    },
  ];

  cartItems.forEach((item) => {
    const cartBtn = document.getElementById(item.btn);
    const cartContainer = document.getElementById(item.container);
    const cartIcon = document.getElementById(item.icon);
    const cartText = document.getElementById(item.text);
    const cartIncrement = document.getElementById(item.increment);
    const cartDecrement = document.getElementById(item.decrement);

    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        cartContainer.classList.add('border-2', 'border-red-400');
        cartBtn.classList.add('bg-primary_1', 'justify-between');
        cartBtn.classList.remove('bg-secondary_50', 'justify-center');
        cartIcon.classList.add('hidden');
        cartText.classList.add('font-semibold', 'text-secondary_50');
        cartText.textContent = 0;
        cartIncrement.classList.remove('hidden');
        cartDecrement.classList.remove('hidden');
        event.preventDefault();
      });
    }
  });
}

cartSelected();
onLoadCartNumbers();
// onLoadQty();
onLoadCartQty();
