import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';

export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Define columns separately, without including data
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
    ];

    return (
        <div style={{ maxWidth: '100%', margin: '20px 30px' }}>
            <Button type="primary" style={{ marginBottom: '20px' }}>Contained</Button>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
            />
        </div>
    );
}

export default HomePage;
