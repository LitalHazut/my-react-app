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
}

export default new ProductStore();
