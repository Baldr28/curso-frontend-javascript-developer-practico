const dropdownFirst = document.getElementById("dropdownFirst");
const emailbtn = document.getElementById("email");
const btnMobile = document.getElementById("hamburguer");
const menuResponsive = document.getElementById("menuResponsive");
const CartDropdown = document.getElementById("asideCart");
const cartIcon = document.getElementById("cartShopping");
const mainId = document.getElementById("mainId");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.getElementById("product-detail");
const closeLaVaina = document.getElementById('closeLaVaina')

emailbtn.addEventListener("click", showDropdown);
btnMobile.addEventListener("click", displayMenu);
cartIcon.addEventListener("click", asideDisplay);
closeLaVaina.addEventListener('click', closeProductDetail)

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

function openProductDetail(){
    const CartDropdownClosed = CartDropdown.classList.contains("InactiveItem");

productDetail.classList.remove('InactiveItem')

if (!CartDropdownClosed){
    CartDropdown.classList.add('InactiveItem')
}
}

function closeProductDetail (){
    productDetail.classList.add('InactiveItem')
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Rat",
  price: 40000,
  image:
    "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Rat",
  price: 40000,
  image:
    "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Rat",
  price: 40000,
  image:
    "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Rat",
  price: 40000,
  image:
    "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "José Luis",
  price: 10000,
  image:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Rat",
  price: 40000,
  image:
    "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=600",
});


for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", openProductDetail);


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
}
