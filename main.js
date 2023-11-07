const dropdownFirst = document.getElementById('dropdownFirst');
const emailbtn = document.getElementById('email');

emailbtn.addEventListener('click', showDropdown);

function showDropdown(){
    dropdownFirst.classList.toggle('inactive')
}