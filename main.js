const dropdownFirst = document.getElementById("dropdownFirst");
const emailbtn = document.getElementById("email");
const btnMobile = document.getElementById("hamburguer");
const menuResponsive = document.getElementById("menuResponsive");
const CartDropdown = document.getElementById("asideCart");
const cartIcon = document.getElementById("cartShopping");
const mainId = document.getElementById("mainId");
const cardsContainer = document.querySelector(".cards-container");
const asideProductDetail = document.getElementById("product-detail");
const closeLaVaina = document.getElementById("closeLaVaina");
const containerGlobalBody = document.getElementById("MainBody");
const orderContainer = document.getElementById("orderContainer");
const totalp = document.getElementById("total");
const shoppingCart = document.getElementsByClassName('shopping-cart');
const contador = document.getElementById('contador')

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  index: 0,
  description:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 1,
  description:
    "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});


productList.push({
  name: "Macbook",
  price: 1000,
  image:
    "https://media.istockphoto.com/id/1143054730/es/foto/un-port%C3%A1til-de-pantalla-en-blanco-en-un-escritorio-para-el-concepto-de-negocios-y-freelance.jpg?s=612x612&w=0&k=20&c=jeAx20xglvVHxwNUAyW21yndZxptQ0lO3EGU7zg0t88=",
  index: 0,
  description:
    "fast powerful and joe mama, its useful for work and stuff like that",
});

productList.push({
  name: "Motorola",
  price: 600,
  image:
    "https://images.pexels.com/photos/215583/pexels-photo-215583.jpeg?auto=compress&cs=tinysrgb&w=600",
  index: 1,
  description: "Motorola, fast and the best quality, camera with 1k pixels xD",
});

productList.push({
  name: "Pug",
  price: 10000,
  image:
    "https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg?auto=compress&cs=tinysrgb&w=600",
  index: 2,
  description:
    "This dog is completely useless, doesn't work as a guardian and it just barks, eat and drink water",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  index: 0,
  description:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 1,
  description: "it's just a crappy computer",
});



productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  index: 0,
  description:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
  name: "Computer",
  price: 750,
  image:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  index: 1,
  description:
    "it's unique design and it's powerful hardware makes this laptop the only computer you'll every want, with a 4k screen and a powerful processor, Intel gen 14th and a powerful graphic cards it can run literally any video game you want.",
});



const productDetail = document.createElement("aside");
productDetail.classList.add("product-detail");
productDetail.setAttribute("id", "product-detail");

productDetail.style.display = "none";

const productDetailClose = document.createElement("div");
productDetailClose.classList.add("productDetailClose");
productDetailClose.setAttribute("id", "closeLaVaina");
productDetailClose.addEventListener("click", () => {
  productDetail.style.display = "none";
  containerGlobalBody.style.overflowY = "auto";
});

const PDCimg = document.createElement("img");
PDCimg.setAttribute("src", "./icons/icon_close.png");
productDetailClose.appendChild(PDCimg);

const asideProductImg = document.createElement("img");

const productDetailInfo = document.createElement("div");
productDetailInfo.classList.add("product-detail--info");

const firstP = document.createElement("p");
const secondP = document.createElement("p");
const thirdP = document.createElement("p");

const primaryButton = document.createElement("button");
primaryButton.classList.add("primary-button", "add-to-cart-button");
primaryButton.innerText = "Add to cart";

const btnImg = document.createElement("img");
/*
        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src="./icons/icon_close.png" alt="close">
        </div>
*/

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

let total = 0;

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

  var divs = document.querySelectorAll('.shopping-cart > div')
  var cantidad = divs.length;
  console.log(cantidad);

  const productInfoFigure = document.createElement("figure");
  const productImgCard = document.createElement("img");
  productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  productImgCard.addEventListener(
    "click",
    ((clickedProduct) => {
      return () => {
        const clickedImage = clickedProduct.image;
        const clickedPrice = clickedProduct.price;
        const clickedName = clickedProduct.name;

        const shoppingCart = document.createElement("div");
        shoppingCart.classList.add("shopping-cart");

        const figureSC = document.createElement("figure");
        const figureImg = document.createElement("img");
        figureImg.src = clickedImage;
        figureSC.appendChild(figureImg);
        shoppingCart.appendChild(figureSC);

        const productNameCart = document.createElement("p");
        productNameCart.textContent = clickedName;

        const productPriceCart = document.createElement("p");
        productPriceCart.textContent = '$' + clickedPrice;

        const closingImg = document.createElement("img");
        closingImg.setAttribute("src", "./icons/icon_close.png");

        closingImg.addEventListener("click", ((clickedProduct) => {
          return () => {
          const shoppingCartClosest = closingImg.closest(".shopping-cart");
           console.log(clickedPrice)
           total -= parseFloat(clickedPrice);
           totalp.textContent = '$' + total;
           cantidad -= 1;
           contador.textContent = cantidad;

        if (shoppingCartClosest) {
            orderContainer.removeChild(shoppingCartClosest);
          }
      }})(product));
     

        shoppingCart.appendChild(productNameCart);
        shoppingCart.appendChild(productPriceCart);
        shoppingCart.appendChild(closingImg);

        orderContainer.appendChild(shoppingCart);

        total += parseFloat(clickedPrice);

        orderContainer.appendChild(shoppingCart);

        totalp.textContent = '$' + total;

        cantidad++

        console.log(cantidad)

        contador.textContent = cantidad;
        
      };
    })(product)
  );




  productInfoFigure.appendChild(productImgCard);

  productInfo.appendChild(productInfoClassless);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

  console.log(product.index);

  productImg.addEventListener(
    "click",
    ((clickedProduct) => {
      return () => {
        const clickedImage = clickedProduct.image;
        const clickedPrice = clickedProduct.price;
        const clickedName = clickedProduct.name;
        const clickedDescription = clickedProduct.description;

        const dropdownFirstClosed = dropdownFirst.classList.contains("inactive");


        if (!dropdownFirstClosed) {
          dropdownFirst.classList.add("inactive");
        }

        asideProductImg.src = clickedImage;
        firstP.textContent = "$ " + clickedPrice;
        secondP.textContent = clickedName;
        thirdP.textContent = clickedDescription;
        console.log(clickedImage);

        productDetail.style.display = "flex";
        containerGlobalBody.style.overflowY = "hidden";

        const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
        
        if (isSmallScreen) {
          containerGlobalBody.style.overflowY = "hidden";
        } else {
          containerGlobalBody.style.overflowY = "auto";
        }
      };
    })(product)
  );
}

emailbtn.addEventListener("click", showDropdown);
btnMobile.addEventListener("click", displayMenu);
cartIcon.addEventListener("click", asideDisplay);

function showDropdown() {
  const productDetailClosed = productDetail.style.display = "none";

  const CartDropdownClosed = CartDropdown.classList.contains("InactiveItem");
  dropdownFirst.classList.toggle("inactive");
  if (!CartDropdownClosed) {
    CartDropdown.classList.add("InactiveItem");
  }
  if (!productDetailClosed) {
    productDetail.style.display = 'none';
  }
}

function displayMenu() {
  const CartDropdownClosed = CartDropdown.classList.contains("InactiveItem");
  const productDetailClosed = productDetail.style.display = "none";
  menuResponsive.classList.toggle("InactiveItem");
  if (!CartDropdownClosed) {
    CartDropdown.classList.add("InactiveItem");
  }
  if (!productDetailClosed) {
    productDetail.style.display = 'none';
  }
  
}



function asideDisplay() {
  const menuResponsiveClosed =
    menuResponsive.classList.contains("InactiveItem");
  const dropdownFirstClosed = dropdownFirst.classList.contains("inactive");
  const productDetailClosed = productDetail.classList.contains("InactiveItem");

  CartDropdown.classList.toggle("InactiveItem");
  if (!menuResponsiveClosed) {
    menuResponsive.classList.add("InactiveItem");
  }
  if (!dropdownFirstClosed) {
    dropdownFirst.classList.add("inactive");
  }

  if (!productDetailClosed) {
    productDetail.style.display = 'none';
  }
}
