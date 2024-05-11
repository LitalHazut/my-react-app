import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductStore from '../../Store/ProductStore';

function ProductForm() {
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        price: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:8080/addProduct', formData);
            const newProduct = { ...formData, id: response.data.id }; // Assuming the server returns the newly created product with an id
            ProductStore.addProduct(newProduct);
            // Reset form after successful submission
            setFormData({ name: '', quantity: '', price: '' });
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
            />

            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Product</button>
            <ProductList />
        </form>

    );
}

export default ProductForm;
