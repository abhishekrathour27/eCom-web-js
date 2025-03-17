

import { showProductContainer } from "./homeProductCards.js";

const arrowMethodToFetchApi = async () => {
    try {
        const response = await fetch("./api/products.json");
        if (!response.ok) { // Use response.ok to check for valid HTTP status
            throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const products = await response.json();
        // console.log(products); 
        
        //  Pass the fetched products to showProductContainer
        showProductContainer(products); 
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
arrowMethodToFetchApi();




