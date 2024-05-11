import React, { useState } from 'react';
import { Input, Button, Typography, Row, Col } from 'antd';

const { Title } = Typography;

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform login logic here (e.g., send credentials to server)
        // For simplicity, just checking if username and password are not empty
        if (username && password) {
            setIsLoggedIn(true);
        } else {
            alert('Please enter username and password');
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
