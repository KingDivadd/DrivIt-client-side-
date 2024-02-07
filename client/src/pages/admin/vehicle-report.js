import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AdminSideBar from 'components/admin-component/side-bar';
import { VehicleInformationCard, VehicleStatusCard, VehicleAssigneeCard, VehicleDriverCard, VehicleMaintCard } from 'components/admin-component/card';
import Table, { CustomizedTables, ReactVirtualizedTable } from 'components/table';
import SideBar from '../../components/side-bar'
import MenuBar from 'components/menu-bar';
import { AiOutlineRollback } from "react-icons/ai";
import { FaSquareCheck } from "react-icons/fa6";
import AlertMessage from 'components/snackbar';
import { MdOutlinePendingActions } from "react-icons/md";



const VehicleReport = ()=>{
    const navigate = useNavigate()
    const {setOpenAlert, setAlertMsg, setAlertSeverity} = ChatState()
    const [vehicle, setVehicle] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!navigator.onLine){
            setOpenAlert(true); setAlertMsg("Network Error!!!"); setAlertSeverity('warning')
        }else{
            fetchVehicleInfo()
        }
    }, [])

    const fetchVehicleInfo = async()=>{
        const pathname = window.location.pathname;
        const parts = pathname.split('/');
        let vehicle_id = parts[parts.length - 1];

        const token = sessionStorage.getItem('token')
        if (token === null){navigate('/login')}
        try {
            const registeredVehicle = await axios.post("https://futa-fleet-guard.onrender.com/api/vehicle/user-vehicle", {vehicle_id}, {
                headers: {
                    "Content-Type":  "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            setVehicle(registeredVehicle.data.userVehicle)
            setShow(true)
        } catch (err) {
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


    function handleBack(){
        navigate(-1)
    }
    
    return (

        <>

        {show ? 
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <AdminSideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ overflowY:'auto', height: '100vh'}} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                    <MenuBar />
                    {/* right bottom section */}
                    <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden"}}  >
                        <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'1rem'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '2rem' }} >
                                <Typography variant='h3' sx={{fontWeight: '600'}}>{vehicle.vehicle_name.toUpperCase()}</Typography>

                                {vehicle.assigned_to.length? 
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .5rem' }}>
                                    <FaSquareCheck size={'1.5rem'} color={'#1B61E4'} />
                                    <Typography variant='h5' sx={{fontWeight: '500'}}>Assigned</Typography>
                                </Box>
                                        :
                                <Box  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .5rem' }}>
                                    <MdOutlinePendingActions size={'1.5rem'} color={'#FF571A'} />
                                    <Typography variant='h5' sx={{fontWeight: '500'}}>Not Assigned</Typography>
                                </Box>}

                            </Box>
                            <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between',width: '100%'}}>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
                                    <Box className='mid-btn back-btn' bgcolor={'warning.main'} onClick={handleBack} sx={{width: '9rem'}} >
                                        <AiOutlineRollback size={'1.5rem'} />
                                        <Typography variant='h5' sx={{ml: '.5rem'}}>Back</Typography> 
                                    </Box>
                                    
                                </Box>
                                <Box sx={{width: '100%', height: '100%',display: 'flex', justifyContent: 'flex-end'}}>
                                    <Box className='hollow-btn' bgColor='primary.light' sx={{width: '9rem',  height: '2.5rem',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Export
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.5rem'}}>
                            {/* the table */}
                            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between', gap: '.75rem'}}>
                                {/* The left side */}
                                <Box sx={{width: '100%'}}>
                                    <VehicleInformationCard vehicle={vehicle} />
                                    <VehicleStatusCard  vehicle={vehicle}/>
                                </Box>
                                {/* the right side */}
                                <Box sx={{width: '100%'}}>
                                    {vehicle.assigned_to.map((data, ind)=>{

                                        return (
                                            <VehicleAssigneeCard key={ind} data={data} />
                                        )
                                    })}
                                    {/* <VehicleDriverCard  vehicle={vehicle} /> */}
                                    <VehicleMaintCard  vehicle={vehicle} />
                                </Box>
                            </Box> 
                        </Box>
                    </Grid>
                </Box>
            </Grid> 
            <AlertMessage />
        </Grid>
            :
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <AdminSideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ overflowY:'auto', height: '100vh'}} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                    <MenuBar />
                    {/* right bottom section */}
                    <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden"}}  >
                        <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'1rem'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '2rem' }} >
                                <Typography variant='h3' sx={{fontWeight: '600'}}>TOYOTA COROLLA</Typography>

                                <Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .5rem' }}>
                                    <FaSquareCheck size={'1.5rem'} color={'#1B61E4'} />
                                    <Typography variant='h5' sx={{fontWeight: '500'}}>Assigned</Typography>
                                </Box>

                            </Box>
                            <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between',width: '100%'}}>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
                                    <Box className='mid-btn back-btn' bgcolor={'warning.main'} onClick={handleBack} sx={{width: '9rem'}} >
                                        <AiOutlineRollback size={'1.5rem'} />
                                        <Typography variant='h5' sx={{ml: '.5rem'}}>Back</Typography> 
                                    </Box>
                                    
                                </Box>
                                <Box sx={{width: '100%', height: '100%',display: 'flex', justifyContent: 'flex-end'}}>
                                    <Box className='hollow-btn' bgColor='primary.light' sx={{width: '9rem',  height: '2.5rem',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Export
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.5rem'}}>
                            {/* the table */}
                            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between', gap: '.75rem'}}>
                                {/* The left side */}
                                <Box sx={{width: '100%'}}>
                                    <VehicleInformationCard />
                                    <VehicleStatusCard />
                                </Box>
                                {/* the right side */}
                                <Box sx={{width: '100%'}}>
                                    <VehicleAssigneeCard />
                                    <VehicleDriverCard />
                                    <VehicleMaintCard />
                                </Box>
                            </Box> 
                        </Box>
                    </Grid>
                </Box>
            </Grid> 
            <AlertMessage />
        </Grid>}

        </>
    )
}

export default VehicleReport