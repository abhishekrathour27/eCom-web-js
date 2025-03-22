import { getCartProductFromLS } from "./getCartProductLS.js";
import { totalPriceLS } from "./totalAmountOfCart.js";

export const increamentDecreament = (event , id , stock , price)=>{
    // console.log(id);
    
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector('.productQuantity')
    const productPrice = currentCardElement.querySelector('.productPrice')
    
    let localStoragePrice = 0;
    let quantity = 1;
    let cartProducts = getCartProductFromLS();

    let existingProd = cartProducts.find((item)=> item.id === id);

    if(existingProd){
        quantity = existingProd.quantity
        localStoragePrice = existingProd.price
        // console.log(localStoragePrice);
    }
    else{
        localStoragePrice = price;
    }



    if (event.target.classList.contains('cartIncrement')) {
        // console.log('this is incre');
        if (quantity < stock) {
            quantity++
        }
        else if (quantity == stock) {
            quantity = stock
            localStoragePrice = quantity * stock;
        }
    }


    if (event.target.classList.contains('cartDecrement')) {
        // console.log('this is incre');
        if (quantity > 1) {
            quantity--

        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2))

    let updateCart = {id , quantity , price: localStoragePrice}
      

    updateCart = cartProducts.map((item) =>{
        return item.id === id ? updateCart : item
    })


    localStorage.setItem('cartProductLS' , JSON.stringify(updateCart));

    productQuantity.innerHTML = quantity
    productPrice.innerHTML = localStoragePrice    
    totalPriceLS();
}