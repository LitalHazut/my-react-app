import React from 'react';
import { Form, Input, Button } from 'antd';
import ProductStore from '../../Store/ProductStore';

interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface UpdateFormProps {
    handleUpdate: (updatedProduct: Product) => void;
    product: Product | null;
}

const UpdateForm: React.FC<UpdateFormProps> = ({ handleUpdate, product }) => {
    const onFinish = async (values: Product) => {
        if (product) {
            const updatedData = { ...product, ...values };

            // Make PUT request to update the product
            try {
                const response = await fetch('http://localhost:8080/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedData)
                });

                if (response.ok) {
                    // Call the handleUpdate callback function with the updated product data
                    handleUpdate(updatedData);
                    ProductStore.updateProduct(updatedData)
                    // setModalVisible(false);
                } else {
                    // Handle error response
                    console.error('Failed to update product');
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error occurred while updating product:', error);
            }
        }
    };


    return (
        <Form onFinish={onFinish} initialValues={product
            || undefined}>
            <Form.Item name="name" label="Name">
                <Input />
            </Form.Item>
            <Form.Item name="quantity" label="Quantity">
                <Input type="number" />
            </Form.Item>
            <Form.Item name="price" label="Price">
                <Input type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">OK</Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateForm;
