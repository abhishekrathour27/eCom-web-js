import { fetchDataFromLS } from "./fetchDataFromLS.js";
import { getCartProductFromLS } from "./getCartProductLS.js";
import { increamentDecreament } from "./increseDecrease.js";
import { totalPriceLS } from "./totalAmountOfCart.js";

let products = []; // Declare products in a higher scope
const updateCartCount = () => {
    const arrLocalStorageProduct = getCartProductFromLS(); // Get updated cart data
    let uniqueProductCount = arrLocalStorageProduct.length; // Count products
    // console.log(uniqueProductCount); // Debugging

    document.querySelector('#cartValue').innerHTML = `
        <img src="./public/shopping-cart.svg" class="cartNo" alt="">${uniqueProductCount}`;
};
export const arrowMethodToFetchApi = async () => {
    try {
        const response = await fetch("./api/products.json");
        products = await response.json(); // Assign the fetched products to the outer variable

        // console.log(products); // Debugging: check if products are loaded

        // Now that products are loaded, filter and log the names
        let filterProducts = products.filter((curProd) => {
            return cartProducts.some((curElem) => curElem.id === curProd.id)
        });
        // console.log(filterProducts);

        const cartElement = document.querySelector('#productCartContainer')
        const tempCont = document.querySelector('#productCartTemplate')

        filterProducts.forEach((currProd) => {
            const { brand, category, description, id, image, name, price, stock } = currProd;

            let productClone = document.importNode(tempCont.content, true);
            productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)

            const lsActualData = fetchDataFromLS(id, price)

            productClone.querySelector('.category').textContent = category
            productClone.querySelector('.productImage').src = image;
            productClone.querySelector('.productImage').alt = name;
            productClone.querySelector('.productName').innerText = name;
            productClone.querySelector('.productPrice').textContent = lsActualData.price
            productClone.querySelector('.productQuantity').textContent = lsActualData.quantity

            productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => {
                cartProducts = getCartProductFromLS();
                cartProducts = cartProducts.filter((item) => item.id !== id);

                localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

                const productElement = document.querySelector(`#card${id}`);
                if (productElement) {
                    productElement.remove(); // Remove the product from the UI
                }
                updateCartCount()
            })
            productClone.querySelector(".stockElement").addEventListener('click', (event) => {
                increamentDecreament(event, id, stock, price)
            })

            cartElement.append(productClone)
        });
        updateCartCount();
        totalPriceLS();

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
let cartProducts = getCartProductFromLS();
arrowMethodToFetchApi();


