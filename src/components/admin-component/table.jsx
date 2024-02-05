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

export default function VehicleTables() {
    const navigate = useNavigate()

    const handleClick = (row)=>{
        navigate(`./${row.maint.replace(/\//g, '-').toLowerCase()}`)
        console.log(row)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
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


function driverData(staffId, lastName, firstName, phone, ) {
    return { staffId, lastName, firstName, phone,  };
}

const driverRows = [
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    driverData('FUTAWORK/0001', "Afolayan", 'Olamide', "09038679727",),
    ];

export function DriversTable() {
    const navigate = useNavigate()

    const handleClick = (row)=>{
        navigate(`./${row.staffId.replace(/\//g, '-').toLowerCase()}`)
        console.log(row)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Staff Id</Typography> </StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Last Name</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>First Name</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Phone No</Typography></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            
            {driverRows.map((row, ind) => {
                const {staffId, lastName, firstName, phone } = row
                return (
                <StyledTableRow key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row)} >
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{staffId}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{lastName}</Typography></StyledTableCell>
                    <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{firstName}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{phone}</Typography></StyledTableCell>
                </StyledTableRow>
                )
            })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

