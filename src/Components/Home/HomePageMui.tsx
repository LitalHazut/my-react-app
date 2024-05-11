import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function createData(
    id: number,
    firstName: string,
    lastName: string,
) {
    return { id, firstName, lastName };
}

const rows = [
    createData(1, 'ליטל', 'חזוט'),

];

export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/data'); // Assuming your backend is running on the same server and listens on port 8080
            const jsonData = await response.json();
            setData(jsonData);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ maxWidth: '100%', margin: '20px 30px' }}>
            <Button variant="contained">Contained</Button>

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">תעודת זהות</TableCell>
                            <TableCell align="right">שם פרטי</TableCell>
                            <TableCell align="right">שם משפחה</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div >
    );
}

export default HomePage;
