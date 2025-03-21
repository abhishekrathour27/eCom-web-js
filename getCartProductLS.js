// export const getCartProductFromLS = () =>{
//     let cartProducts = localStorage.getItem('cartProductLS')

//     if(!cartProducts){
//         return [];
//     }

//     cartProducts = JSON.parse(cartProducts);
//     return cartProducts;
// }

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem('cartProductLS');

    if (!cartProducts) {
        return []; // Return an empty array if there's nothing in localStorage
    }

    try {
        cartProducts = JSON.parse(cartProducts);
        if (!Array.isArray(cartProducts)) {
            throw new Error("Invalid cart data"); // Handle unexpected data types
        }
    } catch (error) {
        console.error("Error parsing cart data:", error.message);
        localStorage.removeItem('cartProductLS'); // Remove corrupted data
        return []; // Return an empty array to prevent further errors
    }

    return cartProducts;
};

