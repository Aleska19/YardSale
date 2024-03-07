const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.nabvar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.card-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function  toggleDesktopMenu() {
    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaidClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaidClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside(),

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')
}


function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
   productDetailContainer.classList.add('inactive');
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://i.pinimg.com/564x/ac/c5/88/acc5885e06f90b23fd5439860b791a57.jpg"
});

productList.push({
    name: 'Compu',
    price: 560,
    image: "https://i.pinimg.com/564x/5b/be/4b/5bbe4bec93c628b533103a30bad9a24f.jpg"
});

productList.push({
    name: 'Mirror',
    price: 60, 
    image: "https://i.pinimg.com/564x/72/dd/cc/72ddccbd047e524bce6d65cb92ece795.jpg"
});

productList.push({
    name: 'Book',
    price: 15,
    image: "https://i.pinimg.com/736x/96/1a/67/961a67e17dd9f5ac1ea859395347323c.jpg"

})

/*<div class="product-card">
    img src= "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
 </div>*/

 function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product = {name, price, image} -> product image
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
     
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
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardContainer.appendChild(productCard)
     }
 }

 renderProducts(productList);

