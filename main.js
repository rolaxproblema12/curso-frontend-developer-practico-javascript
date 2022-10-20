const menuEmail = document.querySelector(".navbar-email");
const desktopMenu   = document.querySelector(".desktop-menu");
const dektopHamIcon = document.querySelector(".menu");
const movileMenu = document.querySelector(".mobile-menu");
const carrito  =document.querySelector('.product-detail');
const carritoImg = document.querySelector('.navbar-shopping-cart');
const carsContainer = document.querySelector('.cards-container');

carritoImg.addEventListener('click',toggleShoppingCart);
dektopHamIcon.addEventListener('click',toggleDesktopMenu);
menuEmail.addEventListener('click', showMenu);
function showMenu() {
    const isCarritoClosed = carritoImg.classList.contains('inactive');
    if (!isCarritoClosed) {
        carrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleDesktopMenu() {
    const isCarritoClosed = carrito.classList.contains('inactive');
    if (!isCarritoClosed){
        carrito.classList.add('inactive');
    }
    movileMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
    const isMenuClosed = movileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    if(!isMenuClosed&&!isDesktopMenu){
        movileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    carrito.classList.toggle('inactive'); 
}
const productList = [];
productList.push({
    name :'bike',
    price : 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name :'pantalla',
    price : 155,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name :'Pcerda',
    price : 1588,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

function renderProducts(arry){
    for (product of arry) {
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
        //product =  {name, price, image} -> product.image
        const img = document.createElement('img');
        img.setAttribute('src',product.img);
        const producInf =  document.createElement('div');
        producInf.classList.add('product-info');
    
    
        const productInfDiv = document.createElement('div');
        
        const productPrice  = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName  = document.createElement('p');
        productName.innerText = product.name;
    
        productInfDiv.appendChild(productPrice);
        productInfDiv.appendChild(productName); 
    
        const productFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src',"./icons/bt_add_to_cart.svg");
        productFigure.appendChild(productImg);
    
        producInf.appendChild(productInfDiv);
        producInf.appendChild(productFigure);
        productCard.appendChild(producInf);
        productCard.appendChild(img);
    
        carsContainer.appendChild(productCard);
        
    }
    
}
renderProducts(productList);