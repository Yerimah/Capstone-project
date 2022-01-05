const hambuger = document.querySelector('#hambug');
const closetog = document.querySelector('#togclose');
const toggleMenu = document.querySelector('.toggle-menu');

function show() {
    toggleMenu.style.display = 'flex';
    toggleMenu.style.top = '0';
} 

function close() {
    toggleMenu.style.top = '-100%';
}

hambuger.addEventListener('click', show);
closetog.addEventListener('click', close);

document.querySelectorAll('.list-menu').forEach((link) => link.addEventListener('click', close));