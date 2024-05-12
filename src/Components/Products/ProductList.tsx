import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ProductStore, { Product } from '../../Store/ProductStore';
import { Button, Modal, Table, message } from 'antd';
import axios from 'axios';
import UpdateForm from './UpdateForm';

const ProductList = observer(() => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
    const handleUpdateClick = (product: Product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const handleUpdate = (updatedProduct: Product) => {
        setModalVisible(false);
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
            render: (price: number) => `$${price}`,
        },
        {
            title: '',
            key: 'delete',
            render: (text: any, record: Product) => (
                <Button onClick={() => handleDelete(record.id)}>Delete</Button>
            ),
        },
        {
            title: 'Update',
            key: 'update',
            render: (text: any, record: Product) => (
                <Button onClick={() => handleUpdateClick(record)}>Update</Button>
            ),
        },
    ];
    const data = ProductStore.products.map((product) => ({
        key: product.id,
        id: product.id, // Include the id property
        name: product.name,
        quantity: product.quantity,
        price: product.price,
    }));




    return (
        <div style={{ margin: '20px' }}>
            <Table columns={columns} dataSource={data} />
            <Modal
                title="Update Product"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                {selectedProduct && <UpdateForm handleUpdate={handleUpdate} product={selectedProduct} />}
            </Modal>
        </div>
    );

});

export default ProductList;
