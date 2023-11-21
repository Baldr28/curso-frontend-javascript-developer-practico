const dropdownFirst = document.getElementById("dropdownFirst");
const emailbtn = document.getElementById("email");
const btnMobile = document.getElementById("hamburguer");
const menuResponsive = document.getElementById("menuResponsive");
const CartDropdown = document.getElementById("asideCart");
const cartIcon = document.getElementById("cartShopping");
const mainId = document.getElementById("mainId");
const cardsContainer = document.querySelector(".cards-container");
const asideProductDetail = document.getElementById("product-detail");
const closeLaVaina = document.getElementById('closeLaVaina')


emailbtn.addEventListener("click", showDropdown);
btnMobile.addEventListener("click", displayMenu);
cartIcon.addEventListener("click", asideDisplay);

function showDropdown() {
  const CartDropdownClosed = CartDropdown.classList.contains("InactiveItem");
  dropdownFirst.classList.toggle("inactive");
  if (!CartDropdownClosed) {
    CartDropdown.classList.add("InactiveItem");
  }
}

function displayMenu() {
 const CartDropdownClosed = CartDropdown.classList.contains("InactiveItem");

   menuResponsive.classList.toggle("InactiveItem");
  if (!CartDropdownClosed) {
     CartDropdown.classList.add("InactiveItem");
   }
  if(!productDetailClosed){
    productDetail.classList.add('InactiveItem')
  }
 }

function asideDisplay() {
  const menuResponsiveClosed =
    menuResponsive.classList.contains("InactiveItem");
  const dropdownFirstClosed = dropdownFirst.classList.contains("inactive");
  const productDetailClosed = productDetail.classList.contains('InactiveItem')

  CartDropdown.classList.toggle("InactiveItem");
  if (!menuResponsiveClosed) {
    menuResponsive.classList.add("InactiveItem");
  }
  if (!dropdownFirstClosed) {
    dropdownFirst.classList.add("inactive");
  }

  if(!productDetailClosed){
    productDetail.classList.add('InactiveItem')
  }
}




const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    index: 0,
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    index: 1,
  description: "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 2,
  description: "A faithful slave, does't complain, knows how to cook, and speaks spanish, a professional cleaning and has studied laws in the university, but it's a loser",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    index: 0,
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    index: 1,
  description: "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 2,
  description: "A faithful slave, does't complain, knows how to cook, and speaks spanish, a professional cleaning and has studied laws in the university, but it's a loser",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    index: 0,
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    index: 1,
  description: "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 2,
  description: "A faithful slave, does't complain, knows how to cook, and speaks spanish, a professional cleaning and has studied laws in the university, but it's a loser",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    index: 0,
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    index: 1,
  description: "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 2,
  description: "A faithful slave, does't complain, knows how to cook, and speaks spanish, a professional cleaning and has studied laws in the university, but it's a loser",
});








const productDetail = document.createElement("aside");
productDetail.classList.add('product-detail');
productDetail.setAttribute('id', 'product-detail');

productDetail.style.display = 'none';

const productDetailClose = document.createElement("div");
productDetailClose.classList.add('productDetailClose');
productDetailClose.setAttribute('id', 'closeLaVaina');
 productDetailClose.addEventListener('click', () =>{

  productDetail.style.display = 'none';

});

const PDCimg = document.createElement('img');
PDCimg.setAttribute("src", "./icons/icon_close.png");
productDetailClose.appendChild(PDCimg);

const asideProductImg = document.createElement('img');

const productDetailInfo = document.createElement('div');
productDetailInfo.classList.add('product-detail--info'); // Correct class name


const firstP = document.createElement('p');
const secondP = document.createElement('p');
const thirdP = document.createElement('p');



const primaryButton = document.createElement('button');
primaryButton.classList.add('primary-button', 'add-to-cart-button');
primaryButton.innerText = "Add to cart";

const btnImg = document.createElement('img');
btnImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
primaryButton.appendChild(btnImg);

productDetail.appendChild(productDetailClose);
productDetail.appendChild(asideProductImg);
productDetail.appendChild(productDetailInfo);
productDetail.appendChild(primaryButton);
mainId.appendChild(productDetail);

productDetailInfo.appendChild(firstP);
productDetailInfo.appendChild(secondP);
productDetailInfo.appendChild(thirdP);


for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  const index = product.index;
  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);




  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoClassless = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;
  productInfoClassless.appendChild(productPrice);
  productInfoClassless.appendChild(productName);

  const productInfoFigure = document.createElement("figure");
  const productImgCard = document.createElement("img");
  productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCard);

  productInfo.appendChild(productInfoClassless);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

  console.log(product.index);

  productName.addEventListener("click", ( clickedProduct => { return () => {
    const clickedImage = clickedProduct.image;
    const clickedPrice = clickedProduct.price
    const clickedName = clickedProduct.name
    const clickedDescription = clickedProduct.description

    asideProductImg.src = clickedImage;
    firstP.textContent = clickedPrice;
    secondP.textContent = clickedName;
    thirdP.textContent = clickedDescription;
    console.log(clickedImage)

    productDetail.style.display = 'block';

  }
  })(product));
}