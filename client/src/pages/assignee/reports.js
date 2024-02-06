import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined, LensBlurRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, {   ReportCard, ReportCardSkeleton } from 'components/role-card';
import Table, { CustomizedTables,CustomizedTablesVlog ,ReactVirtualizedTable } from 'components/table';
import { IoSearch } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CreateLogModal, ReportModal} from 'components/modal';
import SideBar from 'components/side-bar';
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import one from '../../asset/one.jpg'
import two from '../../asset/two.jpg'
import three from '../../asset/three.jpg'
import MenuBar from 'components/menu-bar';
import AlertMessage from 'components/snackbar';
import Skeleton from '@mui/material/Skeleton';


const Report = ()=>{
    const [reports, setReports] = useState([])
    const [empty, setEmpty] = useState(true)
    const {setOpenAlert, setAlertMsg, setAlertSeverity, newIncedentReport} = ChatState()
    const [show, setShow] = useState(false)
    const [vehiclePresent, setVehiclePresent] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('userInfo'))
        console.log(1)
        if(user === null){
            navigate('/login')
        }else{
            console.log(2)
            let vehicle;
            if (user.loggedInUser.role !== 'driver'){
                vehicle = user.loggedInUser.vehicle
                if (vehicle === null || vehicle === undefined){
                    setAlertMsg('No vehicle is assigned to you yet'); setOpenAlert(true); setAlertSeverity('warning')
                    setVehiclePresent(false)
                }else{
                    setVehiclePresent(true)
                    fetchIncedentReport()
                }
            }
            else if (user.loggedInUser.role === 'driver'){
                let owner = user.vehicle_assignee
                vehicle = owner.vehicle
                if (vehicle === null || vehicle === undefined){
                    setAlertMsg('No vehicle is assigned to you yet'); setOpenAlert(true); setAlertSeverity('warning')
                    setVehiclePresent(false)
                }else{
                    setVehiclePresent(true)
                    fetchIncedentReport()
                }
            }
        }
    }, [])


    useEffect(() => {

        
    }, [newIncedentReport])

    const fetchIncedentReport = async()=>{
        if (!navigator.onLine){
            setOpenAlert(true); setAlertMsg("Network Error!!!"); setAlertSeverity('warning');
        }
        else{
            try {
                const token = sessionStorage.getItem('token')
                if(!token){
                    navigate('/login')
                }
                const report = await axios.post("https://futa-fleet-guard.onrender.com/api/incedents/all-incedent", {}, {
                    headers: {
                        "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                setReports(report.data.incedentReports)
                console.log('reports', report.data.incedentReports)
                setShow(true)
            } catch (err) {
                if (!navigator.onLine) {
                setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false); 
                } else if (err.response) {
                setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);setShow(false);
                } else {
                    setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true); setShow(false);
                }
            }
        }
    }

    return (

        <>

        {vehiclePresent? 
        <>
        {show ?
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{overflowY:'auto', height: '100vh' }} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                    <MenuBar />
                    {/* right bottom section */}
                    <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden", }}  >
                        <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'.75rem'}}>
                            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1.5fr))',justifyContent: 'space-between',gap: '1rem',mb: '1rem'}}>
                                <Typography variant="h2" fontWeight={'600'}>Incedent Report</Typography>
                                <Box sx={{width:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ReportModal />
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box sx={{width: '100%',  mt: '.75rem',background: 'white', borderRadius: '.3rem',p:'.5rem', }}>

                            {reports.length === 0 ? 
                            <Box height={'35rem'} mt={'.75rem'}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                                <Typography variant='h3' fontWeight={'500'}>
                                    No Report created yet
                                </Typography>

                                <Typography variant='h4' mt={'1.5rem'} fontWeight={'500'}>
                                    Click on the Create log button to create incedent logs
                                </Typography>

                            </Box>
                                :
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '.75rem',mt: '.75rem'}} >
                                {reports.map((data, ind)=>{

                                    return (
                                        <ReportCard key={ind} reports={data} />
                                    )
                                })}
                            </Box>
                            }
                        </Box>

                    </Grid>
                </Box>
            </Grid> 
            <AlertMessage />
        </Grid>
            :
            <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{overflowY:'auto', height: '100vh' }} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                    <MenuBar />
                    {/* right bottom section */}
                    <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden", }}  >
                        <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'.75rem'}}>
                            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1.5fr))',justifyContent: 'space-between',gap: '1rem',mb: '1rem'}}>
                                <Typography variant="h2" fontWeight={'600'}>Incedent Report</Typography>
                                <Box sx={{width:'100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <ReportModal />
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box sx={{width: '100%',  mt: '.75rem',background: 'white', borderRadius: '.3rem',p:'.5rem', }}>
                            
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '1rem',mt: '.75rem'}} >
                                {[1,2,3,4,5,6,7,8].map((data, ind)=>{

                                    return (
                                        <ReportCardSkeleton key={ind}  />
                                    )
                                })}
                            </Box>
                            
                        </Box>

                    </Grid>
                </Box>
            </Grid> 
        </Grid>
        }    
            <AlertMessage />
        </>
        :
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{overflowY:'auto', height: '100vh' }} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                    <MenuBar />
                    {/* right bottom section */}
                    <Grid sx={{height:'calc(100vh - 3.5rem)', mt: '.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', ml: '.5rem', borderRadius: '.3rem'}}>
                    <Typography variant={'h3'} fontWeight={'500'} >
                        No Vehicle is assiged to you yet.
                    </Typography>
                </Grid>
                </Box>
            </Grid> 
        </Grid>
        }
        </>
    )
}

export default Report