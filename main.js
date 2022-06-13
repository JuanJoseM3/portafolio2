const boton = document.querySelector('#btn-menu')
const navMenu = document.querySelector('.nav-menu')

boton.addEventListener( 'click', () => {
    navMenu.classList.toggle('nav-menu__active');
});