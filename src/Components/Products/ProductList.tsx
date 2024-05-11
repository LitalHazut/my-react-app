import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductStore from '../../Store/ProductStore';

const ProductList = observer(() => {
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/products');
                const data = await response.json();

                ProductStore.setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {ProductStore.products.map(product => (
                    <li key={product.id}>
                        {product.name} - Quantity: {product.quantity} - Price: ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default ProductList;
