import { addToCart } from "./addToCart.js";

const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')


export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach(currProd => {
        const { brand, category, description, id, image, name, price, stock } = currProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)


        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `$${price}`;
        productClone.querySelector('.productActualPrice').textContent = `$${price * 4}`;
        productClone.querySelector('.productStock').textContent = stock;


        // toggle increament or decrement 

        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            const homeQuantityToggle = (event, id, stock) => {
                const currentCardElement = document.querySelector(`#card${id}`)
                // console.log(currentCardElement);

                const productQuantity = currentCardElement.querySelector('.productQuantity');
                let quantity = parseInt(productQuantity.innerHTML)
                // console.log(quantity);



                if (event.target.classList.contains('cartIncrement')) {
                    // console.log('this is incre');
                    if (quantity < stock) {
                        quantity++

                    }
                    else if (quantity == stock) {
                        quantity = stock
                    }
                }


                if (event.target.classList.contains('cartDecrement')) {
                    // console.log('this is incre');
                    if (quantity > 1) {
                        quantity--

                    }
                    else if (quantity == stock) {
                        quantity = stock
                    }
                }

                productQuantity.innerHTML = quantity

            }
            homeQuantityToggle(event, id, stock)
        })

        //******* addToCart function ******

        productClone.querySelector('.add-to-cart-button').addEventListener('click', () => {
            addToCart(event, id, stock)

        })


        productContainer.append(productClone)
    });
}