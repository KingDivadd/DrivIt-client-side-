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
import {MaintHisModal } from './modal'
import CircularAnimation, {SkeletonAnimations} from './skeleton';
import Skeleton from '@mui/material/Skeleton';
import AlertMessage from './snackbar';


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

function createData(date,maint, concern, mileage, supervisor, cost, status) {
    return {date, maint, concern, mileage, supervisor, cost, status };
}

const rows = [
    createData('23 Feb, 2024','FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'Pnding'),
    createData('22 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'Pending'),
    createData('20 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'Pending'),
    createData('19 Feb, 2024','FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'Pending'),
    createData('18 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Progress'),
    createData('17 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'In Progress'),
    createData('16 Feb, 2024','FUTAWORK/0001', "Service required", '1,200km', "Engr Osasona", "12,000", 'Completed'),
    createData('15 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'Completed'),
    createData('14 Feb, 2024','FUTAWORK/0002', "Service required", '1,200km', "Engr Osasona", "12,000", 'Completed'),

    
    ];

export function PlannedMaintTables() {
    const navigate = useNavigate()
    const {planMaintInput, setPlanMaintInput, setOpenAlert, setAlertMsg, setAlertSeverity, newPlannedMaint, setNewPlannedMaint} = ChatState()
    const [planMaintTable, setPlanMaintTable] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo !== null){
            setUser(userInfo)
            if(!navigator.onLine){
                setAlertMsg("Network Error!!!"); setAlertSeverity("error"); setOpenAlert(true)
            }else if (navigator.onLine){
                // fetchTableInfo() 
            }
        }

        if(!navigator.onLine){
            setAlertMsg("Network Error!!!"); setAlertSeverity("error"); setOpenAlert(true)
        }else if(navigator.onLine){
            fetchUserInfo()
        }
        console.log(planMaintInput)
    }, [planMaintInput, newPlannedMaint])

    const fetchTableInfo = async() =>{
        try {
        const vehicle = user.loggedInUser.vehicle
            const token = localStorage.getItem('token')
            if(token === null){
                navigate('/login')
            }
            const table = await axios.post("https://futa-fleet-guard.onrender.com/api/maint-log/all-planned-maint", {vehicle}, {
                headers: {
                    "Content-Type":  "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            setUser(table.data.allPlannedMaint)
            setPlanMaintTable(table.data.allPlannedMaint)
            setLoading(false)
            clearInterval(fetchTableInfo)
        } catch (err) {
            console.log(err)
            if (!navigator.onLine) {
                setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);
                setInterval(fetchTableInfo, 3000)
            } else if (err.response) {
                // Handle server errors
                setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
            } else {
                // Handle network errors
                setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
            }
        }
    }

    const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                const userInfo = await axios.post("https://futa-fleet-guard.onrender.com/api/user/find-user",
                {},
                {
                    headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                    }
                }
                );
                const user = userInfo.data.loggedInUser
                const vehicle = user.vehicle
                clearInterval(fetchUserInfo)
                try {
                    const token = localStorage.getItem('token')
                    if(token === null){
                        navigate('/login')
                    }
                    const table = await axios.post("https://futa-fleet-guard.onrender.com/api/maint-log/all-planned-maint", {vehicle}, {
                        headers: {
                            "Content-Type":  "Application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });

                    setPlanMaintTable(table.data.allPlannedMaint.reverse())
                    setLoading(false)
                    clearInterval(fetchUserInfo)
                } catch (err) {
                    console.log(err)
                    if (!navigator.onLine) {
                        setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);
                        setInterval(fetchUserInfo, 3000)
                        setLoading(false)
                    } else if (err.response) {
                        // Handle server errors
                        setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                        setLoading(false)
                    } else {
                        // Handle network errors
                        setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                        setLoading(false)
                    }
                }
            } catch (err) {
                console.log(err)
                if (!navigator.onLine) {
                    setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);
                    setInterval(handleSubmit, 3000)
                    setLoading(false)
                } else if (err.response) {
                    // Handle server errors
                    setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                    setLoading(false)
                } else {
                    // Handle network errors
                    setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                    setLoading(false)
                }
            }
            };

    const handleClick = (row, ind)=>{ 
        sessionStorage.setItem("workbayRow", JSON.stringify(row))
        navigate(`./${row.maint_id}`)
    }
    return (
        <>
            {loading ?  
                <Box sx={{height: '32.5rem', width:'100%',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Skeleton animation="wave" width={'100%'} height={"15.5rem" }   />
                    <Skeleton animation="wave" width={'100%'} height={"15.5rem" }  />
                    <AlertMessage />

                </Box>
            :
            <>
                {planMaintTable.length ? 
            
            <TableContainer component={Paper} sx={{height: 'auto' ,maxHeight: '32.5rem'}}>
            <Table sx={{ minWidth: 900 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Maintenance Id</Typography> </StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Concerns</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Personnel In Charge</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Planned Date</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Status</Typography></StyledTableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                
                {planMaintTable.map((row, ind) => {
                    const {proposedDate, services, personnel, status, maint_id} = row
                    return (
                    <StyledTableRow key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row, ind)} >
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{maint_id}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{services[0]}</Typography></StyledTableCell>
                        <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{"Oladimeji"}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{proposedDate}</Typography></StyledTableCell>
                        <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{status}</Typography></StyledTableCell>
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
            </Box>
            }
            </>
            
            }
        </>
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

function createVlogData(id,date, startingLocation, endingLocation, route, startingMileage, endingMileage, fuelLevel, createdBy) {
    return { id,date, startingLocation, endingLocation, route, startingMileage, endingMileage, fuelLevel, createdBy };
}

const vLogRows = [
    createVlogData('VHLOG-0001','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0002','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0003','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0004','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0005','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0006','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0007','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0008','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0009','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    createVlogData('VHLOG-0010','27 Jan, 2024', 'Akure, Obanla', 'Akure Obakekere', 'South gate', '123,467', '123, 567', 'mid', 'David'),
    ];

export function DriverLogTable() {
    const navigate = useNavigate()
    const [dailyLog, setDailyLog] = useState([])
    const {setOpenAlert, setAlertMsg, setAlertSeverity, planMaintInput, setPlanMaintInput} = ChatState()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})


    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo !== null){
            setUser(userInfo)
            if(!navigator.onLine){
                setAlertMsg("Network Error!!!"); setAlertSeverity("error"); setOpenAlert(true)
            }else if (navigator.onLine){
                fetchTableInfo()
            }
        }

        if(!navigator.onLine){
            setAlertMsg("Network Error!!!"); setAlertSeverity("error"); setOpenAlert(true)
            setInterval(fetchTableInfo, 3000)
        }else if(navigator.onLine){
            fetchUserInfo()
        }
        console.log(planMaintInput)
    }, [planMaintInput])

    const fetchTableInfo = async() =>{
        try {
                const start_date =""
                const end_date = ""
                const filter = ""
                    const token = localStorage.getItem('token')
                    if(token === null){
                        navigate('/login')
                    }
                    const table = await axios.post("https://futa-fleet-guard.onrender.com/api/drivers-log/all-log", {start_date, end_date, filter}, {
                        headers: {
                            "Content-Type":  "Application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });

                    setDailyLog(table.data.dailyLogs)
                    setLoading(false)
                    clearInterval(fetchTableInfo)
                } catch (err) {
                    if(!navigator.onLine){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                    setInterval(fetchTableInfo, 3000)
                    }else{
                        setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                        setLoading(false)
                    }
                }
    }

    const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                const userInfo = await axios.post(
                "https://futa-fleet-guard.onrender.com/api/user/find-user",
                {},
                {
                    headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                    }
                }
                );

                const user = userInfo.data.loggedInUser
                const vehicle = user.vehicle
                try {
                    const token = localStorage.getItem('token')
                    if(token === null){
                        navigate('/login')
                    }
                    const table = await axios.post("https://futa-fleet-guard.onrender.com/api/drivers-log/all-logs", {vehicle}, {
                        headers: {
                            "Content-Type":  "Application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    console.log(table.data.dailyLogs)
                    setDailyLog(table.data.dailyLogs)
                    setLoading(false)
                    clearInterval(fetchUserInfo)
                } catch (err) {
                    console.log(err)
                    if(!navigator.onLine){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                    // setInterval(fetchUserInfo, 3000)
                    }else{
                        setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                        setLoading(false)
                    }
                }
            } catch (err) {
                console.log(err)
                if(!navigator.onLine){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                    // setInterval(fetchUserInfo, 3000)
                }else{
                    setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                }
            }
            };

    const handleClick = (row)=>{
        navigate(`./${row._id}`)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
        };

    return (
    <>
        

        
        {loading ?  
            <Box sx={{height: '32.5rem', width:'100%',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Skeleton animation="wave" width={'100%'} height={"15.5rem" }   />
                <Skeleton animation="wave" width={'100%'} height={"15.5rem" }  />
                <AlertMessage />

            </Box>
            :
            <>
            {dailyLog.length ?

            <TableContainer component={Paper} sx={{height: '32.5rem'}}>
                <Table sx={{ minWidth: 1100 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCellVlog><Typography variant='h5' fontWeight={'500'}>Date</Typography> </StyledTableCellVlog>

                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Log Time</Typography></StyledTableCellVlog>
                        
                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Current Location</Typography></StyledTableCellVlog>

                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Starting Mileage</Typography></StyledTableCellVlog>

                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Ending Mileage</Typography></StyledTableCellVlog>

                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Starting Fuel Level</Typography></StyledTableCellVlog>

                        <StyledTableCellVlog ><Typography variant='h5' fontWeight={'500'}>Ending Fuel Level</Typography></StyledTableCellVlog>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {dailyLog.map((row, ind)=>{
                        const {_id, createdAt, logTime, addedBy, vehicle, currentLocation, startingMileage, endingMileage, startingFuelLevel, endingFuelLevel} = row
                        return (
                            <StyledTableRowVlog key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row, ind)} >
                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{formatDate(createdAt)}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{logTime}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{currentLocation}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{startingMileage}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{endingMileage}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{startingFuelLevel}</Typography></StyledTableCell>

                                <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{endingFuelLevel}</Typography></StyledTableCell>

        
                                
                            </StyledTableRowVlog>

                        )
                    })}

                    </TableBody>
                    
                </Table>
                <AlertMessage />
            </TableContainer>
            :
            <Box sx={{height: '32rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h3' fontWeight={'500'} >
                    Click on the create log button to add the daily vehicle usage log.
                </Typography>
            </Box>

            }
            </>

        }
    
    </>
    )
}


function createMaintData(date, maint_id, concern, personnel, status) {
    return {date, maint_id, concern, personnel, status };
}

const maintRows = [
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    createMaintData('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", 'In Shop'),
    ];

export function VehicleServiceTables() {
    const navigate = useNavigate()
    const handleClick = (row)=>{
        navigate(`./${row.maint_id.replace(/\//g, '-').toLowerCase()}`)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Date</Typography> </StyledTableCell>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Maintenance Id</Typography> </StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Concerns</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Attending personnel</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Status</Typography></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            
            {maintRows.map((row, ind) => {
                const {date,maint_id, concern, personnel, status } = row
                return (
                <StyledTableRow key={ind} sx={{cursor: 'pointer'}} onClick={()=> handleClick(row)} >
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{date}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{maint_id}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{concern}</Typography></StyledTableCell>
                    <StyledTableCell><Typography variant='h5' fontWeight={'400'}>{personnel}</Typography></StyledTableCell>
                    <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{status}</Typography></StyledTableCell>
                </StyledTableRow>
                )
            })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}



function createMaintLog(date, maint_id, concern, personnel, cost) {
    return {date, maint_id, concern, personnel, cost };
}

const maintLogRows = [
    createMaintLog('02 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '12,000'),
    createMaintLog('04 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '20,000'),
    createMaintLog('05 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '13,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '15,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '12,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '20,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '13,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '15,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '12,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '20,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '13,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '15,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '12,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '20,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '13,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '15,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '12,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '20,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '13,000'),
    createMaintLog('01 Feb, 2024' ,'FUTAWORK/0001', "Service required", "Engr Osasona", '15,000'),
    ];

export function MaintLogTable() {
    const {showHis, setShowHis, maintData, setMaintData} = ChatState()
    const navigate = useNavigate()
    
    const handleClick = (row)=>{
        console.log(row)
        setMaintData(row)
        setShowHis(true)
    }
    return (
        <TableContainer component={Paper} sx={{height: '32.5rem'}}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Date</Typography> </StyledTableCell>
                <StyledTableCell><Typography variant='h5' fontWeight={'500'}>Maintenance Id</Typography> </StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Concerns</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Supervisor</Typography></StyledTableCell>
                <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Cost</Typography></StyledTableCell>
                {/* <StyledTableCell ><Typography variant='h5' fontWeight={'500'}>Status</Typography></StyledTableCell> */}
            </TableRow>
            </TableHead>
            <TableBody>
            
            {maintLogRows.map((row, ind) => {
                const {date, maint_id, concern, personnel, cost } = row
                return (
                <StyledTableRow key={ind} sx={{cursor: 'pointer'}} style={{ height: '2rem' }} onClick={()=> handleClick(row)} >
                    <StyledTableCell  style={{ height: '2rem' }}><Typography variant='h5' fontWeight={'400'}>{date}</Typography></StyledTableCell>
                    <StyledTableCell  style={{ height: '2rem' }}><Typography variant='h5' fontWeight={'400'}>{maint_id}</Typography></StyledTableCell>
                    <StyledTableCell style={{ height: '2rem' }}><Typography variant='h5' fontWeight={'400'}>{concern}</Typography></StyledTableCell>
                    <StyledTableCell  style={{ height: '2rem' }}><Typography variant='h5' fontWeight={'400'}>{personnel}</Typography></StyledTableCell>
                    <StyledTableCell style={{ height: '2rem' }}><Typography variant='h5' fontWeight={'400'}>{cost}</Typography></StyledTableCell>
                    {/* <StyledTableCell ><Typography variant='h5' fontWeight={'400'}>{status}</Typography></StyledTableCell> */}
                </StyledTableRow>
                )
            })}
            </TableBody>
        </Table>

        {showHis && <MaintHisModal />}

        </TableContainer>
    );
}