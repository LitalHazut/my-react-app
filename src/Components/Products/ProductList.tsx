import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductStore from '../../Store/ProductStore';
import { Button, Table, message } from 'antd';
import axios from 'axios';

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
    const handleDelete = async (productId: number) => {
        try {
            // Send DELETE request to backend to delete the product
            const response = await axios.delete(`http://localhost:8080/delete/${productId}`);

            // Check if deletion was successful
            if (response.status === 200) {
                // Update frontend after successful deletion
                ProductStore.deleteProduct(productId); // Assuming ProductStore has a method to delete a product by ID
                message.success('Product deleted successfully');
            } else {
                message.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            message.error('Error deleting product. Please try again.');
        }
    };
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: any) => `$${price}`,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text: any, record: any) => (
                <Button onClick={() => handleDelete(record.key)} >
                    Delete
                </Button>
            ),
        },

    ];
    const data = ProductStore.products.map(product => ({
        key: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
    }));



    return (
        <div style={{ margin: '20px' }}>

            <Table columns={columns} dataSource={data} />
        </div>
    );

});

export default ProductList;
