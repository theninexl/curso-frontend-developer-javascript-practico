const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', function(){toggleElement(desktopMenu)});
hamburguerIcon.addEventListener('click', function(){toggleElement(mobileMenu)});

function toggleElement(elemento) {
    elemento.classList.toggle('inactive');
}

/*function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}*/