import React, { useState } from 'react';
import { Input, Button, Typography, Row, Col, message } from 'antd';
import axios from 'axios';

const { Title } = Typography;

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: username,
                password: password
            });
            console.log('Login successful:', response.data);
            // Redirect to /products route upon successful login
            window.location.href = '/Products';
        } catch (error: any) {
            console.error('Login failed:', error.response.data);
            // Display a popup message for login failure
            message.error('Login failed: Invalid username or password');
        }
    };


    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <Title level={4}>Login</Title>
            <Row justify="center" align="middle">
                <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button
                        type="primary"
                        onClick={handleLogin}
                        style={{ width: '100%' }}
                    >
                        Login
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
