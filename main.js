const dropdownFirst = document.getElementById('dropdownFirst');
const emailbtn = document.getElementById('email');
const btnMobile = document.getElementById('hamburguer')
const menuResponsive = document.getElementById('menuResponsive');
const CartDropdown = document.getElementById('asideCart');
const cartIcon = document.getElementById('cartShopping');
const mainId = document.getElementById('mainId')

emailbtn.addEventListener('click', showDropdown);
btnMobile.addEventListener('click', displayMenu);
cartIcon.addEventListener('click', asideDisplay);
mainId.addEventListener('click', closeAll)

function showDropdown(){
    const CartDropdownClosed = CartDropdown.classList.contains('InactiveItem')
    dropdownFirst.classList.toggle('inactive')
    if(!CartDropdownClosed){
        CartDropdown.classList.add('InactiveItem')
    }
}


function displayMenu(){
const CartDropdownClosed = CartDropdown.classList.contains('InactiveItem')
    menuResponsive.classList.toggle('InactiveItem')

    if(!CartDropdownClosed){
        CartDropdown.classList.add('InactiveItem')
    }


}


function asideDisplay(){
    const menuResponsiveClosed = menuResponsive.classList.contains('InactiveItem')
    const dropdownFirstClosed = dropdownFirst.classList.contains('inactive')

    CartDropdown.classList.toggle('InactiveItem')
    if(!menuResponsiveClosed){
        menuResponsive.classList.add('InactiveItem')
    }
    if (!dropdownFirstClosed){
        dropdownFirst.classList.add('inactive')
    }

}

function closeAll(){
    const menuResponsiveClosed = menuResponsive.classList.contains('InactiveItem')
    const dropdownFirstClosed = dropdownFirst.classList.contains('inactive')
    const CartDropdownClosed = CartDropdown.classList.contains('InactiveItem')

    if(!menuResponsiveClosed){
        menuResponsive.classList.add('InactiveItem')
    }
    if(!CartDropdownClosed){
        CartDropdown.classList.add('InactiveItem')
    }
    if (!dropdownFirstClosed){
        dropdownFirst.classList.add('inactive')
    }
    console.log('thou hast clicked on me')
}