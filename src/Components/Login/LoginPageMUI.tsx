import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorDialogOpen, setErrorDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault(); // prevent default form submission

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: username,
                password: password
            });
            console.log('Login successful:', response.data);
            // Redirect to /products route upon successful login
            window.location.href = '/Products';
        } catch (error: any) {
            console.error('Login failed:', error.response?.data || error.message);
            // Display a popup message for login failure
            setErrorMessage('Invalid username or password');
            setErrorDialogOpen(true);
        }
    };

    const handleCloseErrorDialog = () => {
        setErrorDialogOpen(false);
    };

    return (
        <Container maxWidth="xs">
            <div style={{ marginTop: '100px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Dialog
                open={errorDialogOpen}
                onClose={handleCloseErrorDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Login Failed</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">{errorMessage}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseErrorDialog} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default LoginPage;
