import { getCartProductFromLS } from "./getCartProductLS.js";

 export const fetchDataFromLS = (id, price) => {
              let cartProducts = getCartProductFromLS();

                let existingProd = cartProducts.find((currProd) => currProd.id === id)
                // console.log(existingProd);
                    let quantity
                if (existingProd) {
                   quantity = existingProd.quantity
                   price = existingProd.price
                //   console.log(quantity);
                //   console.log(price);
                }
                return {quantity , price}
            }