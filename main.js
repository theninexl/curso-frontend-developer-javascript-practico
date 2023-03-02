const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//menuEmail.addEventListener('click', function(){toggleElement(desktopMenu)});
//hamburguerIcon.addEventListener('click', function(){toggleElement(mobileMenu)});
//menuCarritoIcon.addEventListener('click', function(){toggleElement(aside)});

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleAside);

/*function toggleElement(elemento) {
    elemento.classList.toggle('inactive');
}*/

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    } 

    aside.classList.toggle('inactive');
}