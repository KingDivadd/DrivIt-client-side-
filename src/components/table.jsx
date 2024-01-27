import  {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined, LensBlurRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditLogModal } from './modal';


export default function Tables(){

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant="h4" fontWeight={'500'}>Maintenacne ID</Typography>
            <Typography variant="h4" fontWeight={'500'}>Concern</Typography>
            <Typography variant="h4" fontWeight={'500'}>Mileage (km)</Typography>
            <Typography variant="h4" fontWeight={'500'}>Personnel In-Charge</Typography>
            <Typography variant="h4" fontWeight={'500'}>Status</Typography>
        </Box>
    )
}
// export function TableBody(){

//     return (
//         <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
//             <Typography variant="h5" fontWeight={'400'}>FUTAWORK/0001</Typography>
//             <Typography variant="h5" fontWeight={'400'}>Service required</Typography>
//             <Typography variant="h5" fontWeight={'400'}>1,200(km)</Typography>
//             <Typography variant="h5" fontWeight={'400'}>Engr Obsanjo</Typography>
//             <Typography variant="h5" fontWeight={'400'}>In Shop</Typography>
//         </Box>
//     )
// }

const sample = [
    ['FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'],
    ['FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'],
    ['FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'],
    ['FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'],
    ['FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'],
];

// function createData(id, maint, concerns, mileage, supervisor, cost, status) {
//     return { id, maint, concerns, mileage, supervisor, cost, status };
// }
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: 'black',
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
    cursor: 'pointer',
}));

function createData(maint, concern, mileage, supervisor, cost, status) {
    return { maint, concern, mileage, supervisor, cost, status };
}

const rows = [
    createData('FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0003', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0004', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0005', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0006', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0007', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0008', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0009', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    createData('FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Shop'),
    
    ];

export function CustomizedTables() {
    const navigate = useNavigate()
    const handleClick = (row)=>{
        navigate(`./${row.maint.replace(/\//g, '-').toLowerCase()}`)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Maintenance Id</Typography> </StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Concerns</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Mileage</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Supervisor</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Cost</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Status</Typography></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            
            {rows.map((row, ind) => {
                const {maint, concern, cost,mileage, status, supervisor } = row
                return (
                <StyledTableRow key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row)} >
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{maint}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{concern}</Typography></StyledTableCell>
                    <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{mileage}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{supervisor}</Typography></StyledTableCell>
                    <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{cost}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{status}</Typography></StyledTableCell>
                </StyledTableRow>
                )
            })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

const StyledTableCellVlog = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
        color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRowVlog = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    cursor: 'pointer',
}));

function createVlogData(date, startingLocation, endingLocation, route, startingMileage, endingMileage, fuelLevel, createdBy) {
    return { date, startingLocation, endingLocation, route, startingMileage, endingMileage, fuelLevel, createdBy };
}

const vLogRows = [
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    ];

export function CustomizedTablesVlog() {

    const {} = chatState()
    const navigate = useNavigate()
    const handleClick = (row)=>{
        console.log(row)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCellVlog><Typography variant='h5' fontWeight={'500'}>Date</Typography> </StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Starting Location</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Ending Location</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Starting Mileage</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Ending Mileage</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Route</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Fuel Level</Typography></StyledTableCellVlog>
                <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Created By</Typography></StyledTableCellVlog>
            </TableRow>
            </TableHead>
            <TableBody>
            
            {vLogRows.map((row, ind) => {
                const {createdBy, date, startingLocation,startingMileage, endingLocation, endingMileage, route, fuelLevel, } = row
                return (
                <StyledTableRowVlog key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row)} >
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{date}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{startingLocation}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog><Typography variant='h5' fontWeight={'400'}>{endingLocation}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{startingMileage}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog><Typography variant='h5' fontWeight={'400'}>{endingMileage}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{route}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{fuelLevel}</Typography></StyledTableCellVlog>
                    <StyledTableCellVlog ><Typography variant='h5' fontWeight={'400'}>{createdBy}</Typography></StyledTableCellVlog>
                </StyledTableRowVlog>
                )
            })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}