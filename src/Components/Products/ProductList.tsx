import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductStore from '../../Store/ProductStore';
import { Table } from 'antd';

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
