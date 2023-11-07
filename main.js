const dropdownFirst = document.getElementById('dropdownFirst');
const emailbtn = document.getElementById('email');
const btnMobile = document.getElementById('hamburguer')
const menuResponsive = document.getElementById('menuResponsive');

emailbtn.addEventListener('click', showDropdown);

function showDropdown(){
    dropdownFirst.classList.toggle('inactive')
}

menuResponsive.classList.remove('activo');

btnMobile.addEventListener('click', displayMenu);

function displayMenu(){
    menuResponsive.classList.toggle('display')
    menuResponsive.classList.toggle('oculto')
}