import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductStore from '../../Store/ProductStore';
import { Form, Input, Button, Col, Row } from 'antd';

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
        try {
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
    const handleDelete = async (productId: number) => {
        try {
            const response = await axios.delete(`http://localhost:8080/delete/${productId}`);
            console.log(response.data); // Assuming the backend returns a message
            // Perform any necessary UI update after successful deletion
        } catch (error) {
            console.error('Error deleting product:', error);
            // Handle error
        }
    };

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
            </Form>
        </div>
    );


}

export default ProductForm;
