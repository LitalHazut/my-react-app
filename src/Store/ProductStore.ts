// ProductStore.ts
import { makeAutoObservable } from 'mobx';

interface Product {
    id: number | null | undefined;
    name: string;
    quantity: number | string;
    price: number | string;
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


}

export default new ProductStore();
