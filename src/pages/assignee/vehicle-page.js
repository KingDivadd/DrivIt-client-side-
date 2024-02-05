import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import SideBar from 'components/side-bar';
import one from '../../asset/one.jpg'
import two from '../../asset/two.jpg'
import three from '../../asset/three.jpg'
import MenuBar from 'components/menu-bar';
import AlertMessage from 'components/snackbar';


const VehiclePage = ()=>{
    const navigate = useNavigate()
    const [vehicle, setVehicle] = useState({})
    const {setOpenAlert, setAlertSeverity, setAlertMsg} = ChatState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token === null){
            navigate('/login')
        }else{
            fetchUserVehicle()
        }
    }, [])
    
    const fetchUserVehicle = async()=>{
        
        try {
            const token = sessionStorage.getItem('token')
            const userVehicle = await axios.post("https://futa-fleet-guard.onrender.com/api/vehicle/user-vehicle",{},{
                headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                    }
            })
            setVehicle(userVehicle.data.userVehicle)
            setShow(true)
        } catch (err) {
            if (!navigator.onLine) {
            setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);setLoading(false);
            } else if (err.response) {
            // Handle server errors
            setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
            setLoading(false);

            } else {
                // Handle network errors
                setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                setLoading(false);
            }
        }
    }
    
    return (
            <>
            {show && 
            
            <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{overflowY:'auto', height: '100vh'}} >
                {/* right top section */}
                <Box sx={{width: '100%', height: 'auto'}}>
                <MenuBar />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden",}}  >
                    <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '.75rem',}}>
                        <Box sx={{backgroundImage: `url(${one})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '.5rem',
                                height: '19rem',
                                }}>
                        </Box>
                        <Box sx={{backgroundImage: `url(${two})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '0.5rem',
                                height: '19rem',
                                }}>
                        </Box>
                        <Box sx={{backgroundImage:  `url(${three})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '0.5rem',
                                height: '19rem',
                                }}>
                        </Box>
                    </Box>

                    <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.75rem'}}>
                        {/* the table */}
                        <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '1.25rem',}}>
                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Vehicle Name</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.vehicle_name}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Vehicle Brand</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.brancd}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Plate Number</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.plate_no}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Engine Number</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.engine_no}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Chasis Number</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.chasis_no}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Fuel Type</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.fuel_type}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Transmission Type</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.transmission}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Body Color</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.vehicle_color}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Current Mileage</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.current_mileage}</Typography>
                            </Box>

                            <Box className='car-box' sx={{border: '1px solid gray', borderRadius: '.3rem', p: '.5rem'}}>
                                <Typography mb={'.75rem'} variant={'h5'} fontWeight={'500'}>Last Recored Loaction</Typography>
                                <Typography variant={'h4'} fontWeight={'500'}>{vehicle.curent_location}</Typography>
                            </Box>


                        </Box> 
                    </Box>
                </Grid>
                </Box>
            </Grid> 
            <AlertMessage />
        </Grid>
            }
        </>
    )
}

export default VehiclePage