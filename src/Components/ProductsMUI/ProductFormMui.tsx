import React, { useState } from 'react';
import axios from 'axios';
import ProductListMui from '../ProductsMUI/ProductListMui';
import ProductStore, { Product } from '../../Store/ProductStore';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

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
            // Convert quantity and price to numbers
            const quantity = parseInt(formData.quantity);
            const price = parseFloat(formData.price);

            // Ensure quantity and price are valid numbers
            if (isNaN(quantity) || isNaN(price)) {
                throw new Error('Quantity and price must be valid numbers');
            }

            // Send the form data to the server
            const response = await axios.post('http://localhost:8080/addProduct', { ...formData, quantity, price });

            // Assuming the server returns the newly created product with an id
            const newProduct = { ...formData, id: response.data.id, quantity, price };

            // Add the new product to the store or update the UI as needed
            ProductStore.addProduct(newProduct);

            // Reset form after successful submission
            setFormData({ name: '', quantity: '', price: '' });

            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    };

    function handleLogout() {
        window.location.href = '/';
    }

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Product Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Quantity"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
                            name="quantity"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            name="price"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Add Product
                </Button>

                <ProductListMui />
                <Button onClick={handleLogout} variant="text" startIcon={<LogoutOutlined />} style={{ marginTop: '20px' }}>
                    Logout
                </Button>
            </form>
        </div>
    );
}

export default ProductForm;
