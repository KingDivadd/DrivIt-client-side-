import  {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined, LensBlurRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery, Skeleton } from '@mui/material'
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
import AlertMessage from 'components/snackbar';



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


export default function VehicleTables() {
    const navigate = useNavigate()
    const {setOpenAlert, setAlertMsg, setAlertSeverity, newVehicle} = ChatState()
    const [allVehicles, setAllVehicles] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!navigator.onLine){
            setAlertMsg("Network Error!!!"); setAlertSeverity('warning'); setOpenAlert(true); setShow(false)
        }else{
            fetchVehicle()
            console.log('fetching vehicles...')
        }
    }, [])

    const fetchVehicle = async()=>{
        const token = sessionStorage.getItem('token')
        if (token === null){navigate('/login')}
        try {
            const registeredVehicles = await axios.post("https://futa-fleet-guard.onrender.com/api/vehicle/all-vehicles/", {}, {
                headers: {
                    "Content-Type":  "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            setAllVehicles(registeredVehicles.data.availVehicles)
            setShow(true)
        } catch (err) {
            console.log(err)
            if (!navigator.onLine) {
                setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            } else if (err.response) {
                // Handle server errors
                setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            } else {
                // Handle network errors
                setAlertMsg("An error occurred"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            }
        }
    }

    const handleClick = (data)=>{
        navigate(`./${data._id}`)
    }
    return (
        <>
        {show ?
        <> 
            {allVehicles.length ? <TableContainer component={Paper} sx={{height: '32.5rem'}}>
            <Table sx={{ minWidth: 900 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Brand</Typography> </StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Name</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Body Color</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Plate No.</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Engine No.</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Chasis No.</Typography></StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                
                {allVehicles.map((data, ind) => {
                    const {brand, vehicle_name, vehicle_color, plate_no, engine_no, chasis_no, _id } = data
                    return (
                    <StyledTableRow key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(data)} >
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{brand}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{vehicle_name}</Typography></StyledTableCell>
                        <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{vehicle_color}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{plate_no}</Typography></StyledTableCell>
                        <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{engine_no}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{chasis_no}</Typography></StyledTableCell>
                    </StyledTableRow>
                    )
                })}
                </TableBody>
            </Table>
            </TableContainer>
            :
            <Box sx={{height: '31.5rem', display: 'flex', jusitifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h3' fontWeight={'500'} >
                    Click the plan maintenance button to plan a maintenance
                </Typography>
            </Box>}
        </>
            :
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Vehicle Brand</Typography> </StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Vehicle Name</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Body Color</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Plate No.</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Engine No.</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Chasis No.</Typography></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {[1,2,3,4,5,6,7].map((row, ind) => {
                    return (
                    <StyledTableRow key={ind} sx={{cursor: 'pointer'}} >
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                        <StyledTableCell ><Skeleton animation="wave"  width={'100%'} height={'100%'} /></StyledTableCell>
                    </StyledTableRow>
                    )
                })}
            </TableBody>
        </Table>
        </TableContainer>}
        <AlertMessage />
        </>
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
        navigate(`./123`)
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

