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
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${price * 4}`;
        productClone.querySelector('.productStock').textContent = stock;

        // toggle increament or decrement 

        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            const homeQuantityToggle = (event, id, stock) => {
                const currentCardElement = document.querySelector(`#card${id}`)
                // console.log(currentCardElement);

            }
            homeQuantityToggle(event, id, stock)
        })


        productContainer.append(productClone)
    });
}