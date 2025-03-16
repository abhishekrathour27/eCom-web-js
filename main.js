// import { showProductContainer } from "./homeProductCards";

// fetch('./homeProductCards.html');


// const arraowMethodToFetchApi = async () => {
//     try {
//         const response = await fetch("./api/products.json");
//         if (!response) {
//             console.log("error retriving the data from the sourse");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// arraowMethodToFetchApi();


// showProductContainer(products)

import { showProductContainer } from "./homeProductCards.js"; // Make sure to add .js extension

const arrowMethodToFetchApi = async () => {
    try {
        const response = await fetch("./api/products.json");
        if (!response.ok) { // Use response.ok to check for valid HTTP status
            throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const products = await response.json();
        console.log(products); // ✅ Products are fetched successfully
        
        // ✅ Pass the fetched products to showProductContainer
        showProductContainer(products); 
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

// ✅ Call the function to load data
arrowMethodToFetchApi();




