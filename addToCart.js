import { getCartProductFromLS } from "./getCartProductLS.js";

//  Function to update the cart count
const updateCartCount = () => {
    const arrLocalStorageProduct = getCartProductFromLS();


    // 🔢 Unique product count (jitne different products hain)
    const uniqueProductCount = arrLocalStorageProduct.length;

    const cartValue = document.querySelector('#cartValue');
    // if (cartValue) {
        cartValue.innerHTML = `<img src="./public/shopping-cart.svg" class="cartNo" alt=""> ${uniqueProductCount}`;
    // }
};

// Function to add to cart
export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS(); 

    const currCartEle = document.querySelector(`#card${id}`);
    if (currCartEle) {
        let quantity = Number(currCartEle.querySelector('.productQuantity').innerText);
        let price = currCartEle.querySelector('.productPrice').innerText.replace("$", "");
        price = Number(price) * quantity;

        // console.log("lets check", arrLocalStorageProduct);
        // Check if product already exists in cart
        const existingProductIndex = arrLocalStorageProduct.findIndex(item => item.id === id);
        // console.log("this is the product index", existingProductIndex);

        if (existingProductIndex !== -1) {
            //  Product pehle se hai → Sirf quantity increase karo
            arrLocalStorageProduct[existingProductIndex].quantity += quantity;
            arrLocalStorageProduct[existingProductIndex].price += price;
        } else {
            //  Naya product hai → Cart me add karo + Cart count increase karo
            arrLocalStorageProduct.push({ id, quantity, price });
        }

        //  Update local storage
        localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

        //  Update cart count after adding product
        updateCartCount();
    } else {
        console.error(`Element with id="card${id}" not found.`);
    }
};

//  Update cart count on page load
updateCartCount();
