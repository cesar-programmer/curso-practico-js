/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartsContainer = document.querySelector('.cards-container');

const productDerailContainer = document.querySelector('.product-detail-secundary');

const closeX = document.querySelector('.close');

function toggleDesktopMenu() {
  aside.classList.add('inactive');
  productDerailContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
  aside.classList.add('inactive');
  productDerailContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function showMyOrder() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDerailContainer.classList.add('inactive');
  aside.classList.toggle('inactive');
}

function openProductDetailAside() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  aside.classList.add('inactive');
  productDerailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDerailContainer.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', showMobileMenu);
menuCartIcon.addEventListener('click', showMyOrder);
closeX.addEventListener('click', closeProductDetailAside);

const productList = [];
productList.push({
  name: 'bike',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'mac',
  price: 2300,
  image: 'https://photos5.appleinsider.com/gallery/31897-53949-imac2019-duo-l.jpg',
});
productList.push({
  name: 'gallo',
  price: 13200,
  image: 'https://atlasanimal.com/wp-content/uploads/2021/02/gallo.jpg.webp',
});
productList.push({
  name: 'pug',
  price: 0,
  image: 'http://aboutpug.com/wp-content/uploads/2014/12/Cute-Serious-pug-2.jpg',
});
productList.push({
  name: 'bike',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'mac',
  price: 2300,
  image: 'https://photos5.appleinsider.com/gallery/31897-53949-imac2019-duo-l.jpg',
});
productList.push({
  name: 'gallo',
  price: 13200,
  image: 'https://atlasanimal.com/wp-content/uploads/2021/02/gallo.jpg.webp',
});
productList.push({
  name: 'pug',
  price: 0,
  image: 'https://media.giphy.com/media/l44QjgeQ5ium91n9K/giphy.gif',
});

function renderProducts(list) {
  for (const product of list) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', '../assets/img/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(img);
    productCart.appendChild(productInfo);

    cartsContainer.appendChild(productCart);
  }
}

renderProducts(productList);
