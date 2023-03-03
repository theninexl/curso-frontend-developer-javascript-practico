const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

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
    console.log("toggle aside");
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    } 

    aside.classList.toggle('inactive');
}

const productLIst = [];
productLIst.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productLIst.push({
    name:'otra bike',
    price:180,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productLIst.push({
    name:'third bike',
    price:240,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productLIst);