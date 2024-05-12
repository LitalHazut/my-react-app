// ProductStore.ts
import { makeAutoObservable } from 'mobx';

export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

class ProductStore {
    products: Product[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setProducts(products: Product[]) {
        this.products = products;
    }

    addProduct(product: Product) {
        this.products.push(product);
    }
    deleteProduct(productId: number) {
        this.products = this.products.filter(product => product.id !== productId);
    }
    updateProduct(updatedProduct: Product) {
        // Find the index of the product with the matching ID
        const index = this.products.findIndex(product => product.id === updatedProduct.id);

        // If the product with the matching ID is found
        if (index !== -1) {
            // Update the product's properties with the new values
            this.products[index] = { ...this.products[index], ...updatedProduct };
        } else {
            // If the product with the matching ID is not found, you may handle it as per your requirements
            console.error(`Product with ID ${updatedProduct.id} not found.`);
        }
    }



}

export default new ProductStore();
