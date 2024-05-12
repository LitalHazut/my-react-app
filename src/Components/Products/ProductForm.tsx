import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductStore, { Product } from '../../Store/ProductStore';
import { Form, Input, Button, Col, Row } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

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
            const newProduct: Product = { ...formData, id: response.data.id, quantity, price };

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



    function handleLogout(event: any): void {
        window.location.href = '/'
    }

    return (
        <div style={{ margin: '20px' }}>
            <Form onFinish={handleSubmit}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input the product name!' }]}
                        >
                            <Input
                                value={formData.name}
                                onChange={handleChange}
                                name="name"
                            />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Quantity"
                            name="quantity"
                            rules={[{ required: true, message: 'Please input the quantity!' }]}
                        >
                            <Input
                                type="number"
                                value={formData.quantity}
                                onChange={handleChange}
                                name="quantity"
                            />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: 'Please input the price!' }]}
                        >
                            <Input
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                name="price"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit">
                        Add Product
                    </Button>
                </Form.Item>
                <ProductList />
                <Button type="text" onClick={handleLogout} icon={<LogoutOutlined />}>
                    Logout
                </Button>
            </Form>
        </div>
    );


}

export default ProductForm;
