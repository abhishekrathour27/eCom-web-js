
export const totalPriceLS = () => {
   let cartProducts = getCartProductFromLS();
   let totalAmountOfCart = cartProducts.reduce((sum, item) => sum + item.price, 0)
   //  console.log(totalAmountOfCart);
   totalAmountOfCart = Number(totalAmountOfCart.toFixed(2))
   document.querySelector('.productSubTotal').innerText = totalAmountOfCart

   let finalTotal = totalAmountOfCart + 50;
    document.querySelector('.productFinalTotal').innerText = finalTotal

}

