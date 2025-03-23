import { getCartProductFromLS } from "./getCartProductLS.js";
import { showToast } from "./showToast.js";

// Function to update the cart count
const updateCartCount = () => {
    const arrLocalStorageProduct = getCartProductFromLS();

    // 🔢 Unique product count (jitne different products hain)
    const uniqueProductCount = arrLocalStorageProduct.length;

    const cartValue = document.querySelector('#cartValue');
    cartValue.innerHTML = `<img src="./public/shopping-cart.svg" class="cartNo" alt=""> ${uniqueProductCount}`;
};

 // Function to calculate total price

 

// Function to add to cart
export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();

    const currCartEle = document.querySelector(`#card${id}`);
    if (currCartEle) {
        let quantity = Number(currCartEle.querySelector('.productQuantity').innerText);
        let price = currCartEle.querySelector('.productPrice').innerText.replace("$", "");
        price = Number(price) * quantity;

        // Check if product already exists in cart
        const existingProductIndex = arrLocalStorageProduct.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            // Product already exists → Check if adding more exceeds stock
            const currentQuantity = arrLocalStorageProduct[existingProductIndex].quantity;
            if (currentQuantity < stock) {
                arrLocalStorageProduct[existingProductIndex].quantity += quantity;
                arrLocalStorageProduct[existingProductIndex].price += price;
            } else {
                alert(`You can't add more item available stock is (${stock}).`);
            }
        } else {
            // New product → Check if initial quantity exceeds stock
            if (quantity <= stock) {
                arrLocalStorageProduct.push({ id, quantity, price });
            } else {
                alert(`Cannot add more than available stock (${stock}).`);
            }
        }

        // Update local storage
        localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

        // Update cart count after adding product
        updateCartCount();
        showToast('add' , id)
    } else {
        console.error(`Element with id="card${id}" not found.`);
    }
};

// Update cart count on page load
updateCartCount();
