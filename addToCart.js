import { getCartProductFromLS } from "./getCartProduct.js";

export  const addToCart = (event, id, stock) => {
   
    let arrLocalStorageProduct = getCartProductFromLS();

    const currCartEle = document.querySelector(`#card${id}`)
    // console.log(currCartEle);

    let quantity = currCartEle.querySelector('.productQuantity').innerText

    let price = currCartEle.querySelector('.productPrice').innerText
    // console.log(quantity , price);

    price = price.replace("$","")
    price = Number(price * quantity)
//    console.log(quantity);
    quantity = Number(quantity);

     arrLocalStorageProduct.push({id,quantity,price})
    localStorage.setItem('cartProductLS' , JSON.stringify(arrLocalStorageProduct))
}