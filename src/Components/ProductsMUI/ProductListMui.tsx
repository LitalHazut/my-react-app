import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ProductStore, { Product } from '../../Store/ProductStore';
import { Button, Typography, Modal } from '@mui/material';
import axios from 'axios';
import UpdateFormMui from './UpdateFormMui';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const ProductListMui: React.FC = observer(() => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('http://localhost:8080/products');
                ProductStore.setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (productId: number) => {
        try {
            const response = await axios.delete(`http://localhost:8080/delete/${productId}`);
            if (response.status === 200) {
                ProductStore.deleteProduct(productId);
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleUpdateClick = (product: Product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleUpdate = (updatedProduct: Product) => {
        setModalOpen(false);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Product Name', flex: 1 },
        { field: 'quantity', headerName: 'Quantity', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
        {
            field: 'delete',
            headerName: 'Delete',
            flex: 1,
            renderCell: (params: any) => (
                <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
            ),
        },
        {
            field: 'update',
            headerName: 'Update',
            flex: 1,
            renderCell: (params: any) => (
                <Button onClick={() => handleUpdateClick(params.row)}>Update</Button>
            ),
        },
    ];

    const rows = ProductStore.products.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <br />
            <Typography variant="h4" gutterBottom>
                Product List
            </Typography>
            <DataGrid
                columns={columns}
                rows={rows}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="update-product-modal">
                <div>
                    {selectedProduct && <UpdateFormMui handleUpdate={handleUpdate} product={selectedProduct} />}
                </div>
            </Modal>
        </div>
    );
});

export default ProductListMui;
