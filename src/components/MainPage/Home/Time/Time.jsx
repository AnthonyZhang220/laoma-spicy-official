import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import "./Time.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(day, time, dayIndex) {
    return { day, time, dayIndex };
}

function getDay() {
    const day = new Date()
    return day.getDay();
}

const rows = [
    createData('Sunday', "11:00 AM - 9:30 PM", 0),
    createData('Monday', "11:00 AM - 9:30 PM", 1),
    createData('Tuesday', "11:00 AM - 9:30 PM", 2),
    createData('Wednesday', "11:00 AM - 9:30 PM", 3),
    createData('Thrusday', "11:00 AM - 9:30 PM", 4),
    createData('Friday', "11:00 AM - 9:30 PM", 5),
    createData('Saturday', "11:00 AM - 9:30 PM", 6),
];

export default function Time() {
    return (
        <TableContainer component={Paper} className='time-table'>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Address</StyledTableCell>
                        <StyledTableCell>58 E 8th St, New York, NY</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Phone Number</StyledTableCell>
                        <StyledTableCell>(212)777-1887</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Days</StyledTableCell>
                        <StyledTableCell>Time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.day} >
                            <StyledTableCell sx={{ backgroundColor: getDay() === row.dayIndex ? "greenyellow" : "inherit" }}>
                                {row.day}
                                {getDay() === row.dayIndex ? "(Today)" : null}
                            </StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: getDay() === row.dayIndex ? "greenyellow" : "inherit" }}>{row.time}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
