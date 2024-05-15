import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
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

const UpdateFormMui: React.FC<UpdateFormProps> = ({ handleUpdate, product }) => {
    const handleSubmit = async (values: Product) => {
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
                    ProductStore.updateProduct(updatedData);
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
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px', maxWidth: '400px', margin: '80px auto' }}>
            <Formik
                initialValues={product || { id: 0, name: '', quantity: 0, price: 0 }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field name="name">
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        id="name"
                                        label="Name"
                                    />
                                )}
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="quantity">
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        id="quantity"
                                        label="Quantity"
                                        type="number"
                                    />
                                )}
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="price">
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        id="price"
                                        label="Price"
                                        type="number"
                                    />
                                )}
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                OK
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </div>
    );
};

export default UpdateFormMui;
