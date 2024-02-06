import React, { useRef, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { MdOutlinePendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { GiHomeGarage } from "react-icons/gi";
import { ChatState } from 'context/chatContext';
import { FaSquareCheck } from "react-icons/fa6";
import BarChart from './bar-chart';
import DoughnutChart from "./donut-chart";
import david from "../asset/david.jpg"
import { FeedBackModal, MaintFeedBackModal } from './modal';
import { FaCar } from "react-icons/fa6";
import { SelectMaintStatusModal } from './modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertMessage from "./snackbar";
import { GoChecklist } from "react-icons/go";
import Skeleton from '@mui/material/Skeleton';




export default function MaintPersonnel() {
    const {userRole, setUserRole} = ChatState()

    const handleRole = (den)=>{
        setUserRole({boo: false, value: den})
    }
    return (
    <Card onClick={()=> handleRole("maintenance_personnel")} sx={{ minWidth: '13rem', height: '10rem', cursor: 'pointer' }}>
        <CardContent>
        <Typography variant="h5" gutterBottom>
            Maintenance Personnel
        </Typography>
        <Typography variant="h6" component="div">
            An individual who is trained and skilled in repairing and maintaining vehicles.
        </Typography>
        <DoughnutChart />
        
        </CardContent>
        
    </Card>
    );
}

export const DriverCard = ()=>{
    const {userRole, setUserRole} = ChatState()

        const handleRole = (den)=>{
        setUserRole({boo: false, value: den})
        }

    return (
    <Card onClick={()=> handleRole("driver")} sx={{ minWidth: '13rem', height: '10rem', cursor: 'pointer' }}>
        <CardContent>
        <Typography variant="h5" gutterBottom>
            Vehicle Driver
        </Typography>
        <Typography variant="h6" component="div">
            An individual who operates a vehicle for transportation purpose.
        </Typography>
        
        </CardContent>
        
    </Card>
    );
}

export const Assigee = ()=>{
    const {userRole, setUserRole} = ChatState()

    const handleRole = (den)=>{
    setUserRole({boo: false, value: den})
    }

    return (
    <Card onClick={()=> handleRole("vehicle_assignee")} sx={{ minWidth: '13rem', height: '10rem', cursor: 'pointer' }}>
        <CardContent>
        <Typography variant="h5" gutterBottom>
            Vehicle Assignee
        </Typography>
        <Typography variant="h6" component="div">
            An individual that legally posseses and has ownership rights over a particular vehicle.
        </Typography>
        
        </CardContent>
        
    </Card>
    );
}

export const DashCard = ({title, value, icon, suffix})=>{

    
    return (
        <Card  sx={{ minWidth: '18rem', height: '6.5rem', cursor: 'pointer' }}>
            <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',gap: 1.5,  }}>
                <Avatar sx={{ background: '#E8EFFC', color: '#1B61E4', height: '4.5rem', width: '4.5rem', borderRadius: '.3rem', }}> {icon} </Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start',}}>
                    <Typography variant="h5" component="div" sx={{height: '2.75rem', fontWeight: '500'}}>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {value}{suffix}
                    </Typography>

                </Box>
            
            </CardContent>
        
        </Card>
    )
}

export const MaintAnalyticsCard = ({})=>{
    const chartRef = useRef(null);
    const [chartDimensions, setChartDimensions] = useState({ width: "20rem", height: "100%" });
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const resizeHandler = () => {
        const parentWidth = chartRef.current?.parentNode.clientWidth;
        const parentHeight = chartRef.current?.parentNode.clientHeight;
        setChartDimensions({ width: parentWidth, height: chartDimensions.height });
        setWidth(window.innerWidth)
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [width]);
    
    return (
        <Card  sx={{ background: '#FFFFF', cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h4" mb={'2rem'} fontWeight={'500'} gutterBottom>
                    Maintenance Jobs Analytics
                </Typography>
                <BarChart />
            
            </CardContent>
        
        </Card>
    )
}

export const ServiceChartCard = ({})=>{

    
    return (
        <Card  sx={{ background: 'white' , width: '100%', height: '25rem', cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h4" fontWeignt={'500'} gutterBottom>
                    Maintenacne Job Analytics
                </Typography>
                <BarChart />                
            </CardContent>
        
        </Card>
    )
}
export const ActiveAssigneeCard = ({})=>{
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', pb: '-.85rem'}}>
            <CardContent>
                <Typography variant="h4" sx={{mb: '1.5rem', display: 'flex', justifyContent: 'center', fontWeight:'400'}} gutterBottom>
                    Vehicle Owner
                </Typography>
                <Box sx={{backgroundImage: `url(${david})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',height: '10rem', width: '15rem', borderRadius: '.5rem', m: '0 auto', mb: '1.5rem'}}></Box>
                {/* <Avatar sizes='10rem' sx={{ m: 1,  background: '#1B61E4', color: 'white', height:'7rem', width: '9rem', borderRadius: '.3rem',m: '0 auto' , mb: '1.5rem'}}> <img src={david} alt="" /> </Avatar> */}
                <Typography variant="h6" component="div" sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Typography variant="h4" sx={{mb: '1rem'}} gutterBottom>
                        { "Isogun Oluwakemi"}
                    </Typography>
                    <Typography variant="h5" sx={{mb: '1rem'}} gutterBottom>
                        {"FUTA/133/2024"}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {"07044907610"}
                    </Typography>
                </Typography>
            
            </CardContent>
        
        </Card>
    )
}
export const ActiveDriverCard = ({info})=>{
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', pb: '-.85rem'}}>
            <CardContent>
                <Typography variant="h4" sx={{mb: '1.5rem', display: 'flex', justifyContent: 'center', fontWeight:'400'}} gutterBottom>
                    Assigned Driver
                </Typography>
                <Box sx={{backgroundImage: `url(${info.pic})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',height: '10rem', width: '15rem', borderRadius: '.5rem', m: '0 auto', mb: '1.5rem'}}></Box>
                {/* <Avatar sizes='10rem' sx={{ m: 1,  background: '#1B61E4', color: 'white', height:'7rem', width: '9rem', borderRadius: '.3rem',m: '0 auto' , mb: '1.5rem'}}> <img src={david} alt="" /> </Avatar> */}
                <Typography variant="h6" component="div" sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Typography variant="h4" sx={{mb: '1rem'}} gutterBottom>
                        { info.lastName} {info.firstName}
                    </Typography>
                    <Typography variant="h5" sx={{mb: '1rem'}} gutterBottom>
                        {info.staffId}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {info.phone}
                    </Typography>
                </Typography>
            
            </CardContent>
        
        </Card>
    )
}

export const WorkbayMaintCard = ({data})=>{
    const navigate = useNavigate()
    const services = ['Oil Change', 'Battery Check', 'Suspension Check', 'Tire Check']
    const [vehicle, setVehicle] = useState({})
    const {setOpenAlert, setAlertMsg, setAlertSeverity} = ChatState()
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    useEffect(() => {
        fetchVehicle()
    }, [data])

    const fetchVehicle = async()=>{
        try {

            const token = localStorage.getItem('token');
                const fetchedVehicle = await axios.post("https://futa-fleet-guard.onrender.com/api/vehicle/user-vehicle",
                {},{
                    headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                    }
                }
                );
                setVehicle(fetchedVehicle.data.userVehicle)

            } catch (err) {
                console.log(err)
                if (!navigator.onLine) {
                    setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);
                } else if (err.response) {
                    // Handle server errors
                    setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                } else {
                    // Handle network errors
                    setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
            }
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };
    
    return (
        
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer' }}>
            <CardContent sx={{ p: '.5rem', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.25rem'} fontWeight={'500'}>Services</Typography>
                    <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', justifyContent: 'start', gap: '.75rem'}} mb={'1.25rem'}>

                        {data.services.map((data, ind)=>{
                            return(
                                <Box key={ind} className='small-rounded-btn' sx={{height: '2.3rem', p: '0 .5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.3rem', border: '1px solid gray', width: '15rem'}}>
                                    <Typography variant='h6' fontWeight={'500'}>{data}</Typography>
                                </Box>
                            )
                        })}

                    </Box>
                    <Typography variant='h5' mt={'.2rem'} mb={'.75rem'} fontWeight={'500'}>Concerns</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>
                        {data.concerns}
                    </Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Current Mileage</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>{vehicle.current_mileage}km</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Planned Date</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>{formatDate(data.proposedDate)}</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Maintenance Personnel</Typography>
                    <Typography variant='h5' fontWeight={'400'}>Engr Oladimaji</Typography>
            </CardContent>
            <AlertMessage />
        </Card>
    )
}



export const StatusCard = ({data})=>{


    const [status, setStatus] = useState('completed')
    return (
        <Card  sx={{ width: '100%', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{ }}>
                <Typography variant='h4' fontWeight={'500'} mb={'2rem'} >Vehicle Maintenance Status</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',gap: '1.5rem', width: '100%'}}>
                    
                    <Box className={data.status === "pending" ? "pending-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><MdOutlinePendingActions size={'1.6rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Pending</Typography>
                    </Box>                    
                    
                    <Box className={data.status === "accepted" ? "accepted-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><GoChecklist size={'1.6rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Accepted</Typography>
                    </Box>                    

                    <Box className={data.status === "in-shop"?"in-shop-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <GiHomeGarage size={'1.5rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">In Shop</Typography>
                    </Box>                    

                    <Box className={data.status === "in-progress"?"in-progress-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <GrInProgress size={'1.3rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">In Progress</Typography>
                    </Box>                    

                    <Box className={data.status === "completed"?"completed-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{ display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <FaSquareCheck size={'1.4rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Completed</Typography>
                    </Box> 
                

                </Box>
            
            </CardContent>
        
        </Card>
    )
}


export const FeedbackCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', }}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.5rem'} fontWeight={'500'}>Personnel Feedback</Typography>
                    
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Vehicle Type</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>Car</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Repair Done</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>No report available.</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Repair done</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>No reports available</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Completion Date</Typography>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'400'}>31 January, 2024</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'500'}>Image Report</Typography>
                    <Avatar sizes='10rem' sx={{ background: '#1B61E4', color: 'white', height:'11rem', width: '100%', borderRadius: '.3rem', }}> <FaCar /> </Avatar> 
                    <FeedBackModal />
            </CardContent>
        
        </Card>
    )
}

export const ReportCardSkeleton = ()=>{

    return (
        <Card  sx={{ minWidth: '15rem', cursor: 'pointer', p: '0' }}>
            <CardContent sx={{p: '0 .5rem'}}>
                <Box sx={{mb: '1rem',mt: '.5rem',height: '8rem',}}><Skeleton animation="wave" width={'100%'} height={'100%'} /> </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'flex-start', mb: '-.85rem', gap: '.75rem'}}>
                        <Skeleton animation="wave" width={'100%'} height={'1.5rem'}  />
                        <Skeleton animation="wave" width={'100%'} height={'1.5rem'}  />

                </Box>
            </CardContent>
        
        </Card>
    )
}

export const ReportCard = ({data})=>{

    return (
        <Card  sx={{ minWidth: '15rem', cursor: 'pointer', p: '0' }}>
            <CardContent sx={{p: '0 .5rem'}}>
                <Box sx={{backgroundImage: `url(${data.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '.3rem',
                    mb: '1rem',
                    mt: '.5rem',
                    height: '8rem',
                    }}>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'flex-start', mb: '-.85rem'}}>
                    <Typography variant={'h6'} fontWeight={'400'} mb={'.5rem'} >Incident Location</Typography>
                    <Typography variant={'h6'} fontWeight={'500'} mb={'.5rem'} >{data.location}</Typography>

                    <Typography variant={'h6'} fontWeight={'400'} mb={'.5rem'} >Description</Typography>
                    <Typography variant={'h6'} fontWeight={'500'}  >{data.description}</Typography>
                </Box>
            </CardContent>
        
        </Card>
    )
}


export const LandingPageCard = ({title, note})=>{



    return (
    <Card sx={{ width: '100%', cursor: 'pointer' }}>
        <CardContent>
            <Typography variant="h3" fontWeignt={'800'} gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" fontWeight={'500'} mt={'.75rem'} lineHeight={'1.65rem'} component="div">
                {note}
            </Typography>
        
        </CardContent>
        
    </Card>
    );
}


export const MaintDashCard = ({title, value, icon, suffix})=>{

    
    return (
        <Card  sx={{ minWidth: '18rem', height: '6.5rem', cursor: 'pointer' }}>
            <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',gap: 1.5,  }}>
                <Avatar sx={{ background: '#E8EFFC', color: '#1B61E4', height: '4.5rem', width: '4.5rem', borderRadius: '.3rem', }}> {icon} </Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start',}}>
                    <Typography variant="h5" component="div" sx={{height: '2.75rem', fontWeight: '500'}}>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {value}{suffix}
                    </Typography>

                </Box>
            
            </CardContent>
        
        </Card>
    )
}


export const MaintPersonnelCard = ({})=>{
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', pb: '-.85rem'}}>
            <CardContent>
                <Typography variant="h4" sx={{mb: '1.5rem', display: 'flex', justifyContent: 'center', fontWeight:'500',}} gutterBottom>
                    Maintenance Personnel
                </Typography>
                <Box sx={{backgroundImage: `url(${david})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',height: '10rem', width: '15rem', borderRadius: '.5rem', m: '0 auto', mb: '1.5rem'}}></Box>
                {/* <Avatar sizes='10rem' sx={{ m: 1,  background: '#1B61E4', color: 'white', height:'7rem', width: '9rem', borderRadius: '.3rem',m: '0 auto' , mb: '1.5rem'}}> <img src={david} alt="" /> </Avatar> */}
                <Typography variant="h6" component="div" sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Typography variant="h4" sx={{mb: '1rem'}} gutterBottom>
                        { "Adeniran Oladimeji"}
                    </Typography>
                    <Typography variant="h5" sx={{mb: '1rem'}} gutterBottom>
                        {"FUTA/14/2023"}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {"08034567982"}
                    </Typography>
                </Typography>
            
            </CardContent>
        
        </Card>
    )
}


export const UpcomingWorksCard = ({})=>{

    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h4" fontWeight={'500'} sx={{mb: '1.5rem'}} >
                    Upcoming Works
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', mb: '.5rem'}}>
                    <Typography variant="h5" fontWeight={'600'} component="div">Maintenance</Typography>
                    <Typography variant="h5"  fontWeight={'600'} component="div">Date</Typography>
                </Box>
                
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
                <Box sx={{height: '2.25rem' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray'}}>
                    <Typography variant="h5" fontWeight={'400'} component="div">Services</Typography>
                    <Typography variant="h5"  fontWeight={'400'} component="div">31 Jan, 2024</Typography>
                </Box>
            
            </CardContent>
        
        </Card>
    )
}



export const MaintReportCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', }}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'2rem'} fontWeight={'500'}>Maintenance Report</Typography>
                    
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Service(s) Done</Typography>
                    <input className='input  search-input' name = {"username"} value={""} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray', marginBottom: '1.5rem'}}/>

                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Service Description</Typography>
                    <input className='input  search-input' name = {"username"} value={""} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray', marginBottom: '1.5rem'}}/>
                    
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Service Cost</Typography>
                    <input className='input  search-input' name = {"username"} value={""} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray',  marginBottom: '1.5rem'}}/>

                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Completion Date</Typography>
                    <input className='input  search-input' name = {"username"} value={"Select date"} onChange={(e)=> handleChange(e) }type="date" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray',  marginBottom: '1.5rem'}}/>

                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Image Report</Typography>
                    <Avatar sizes='10rem' sx={{ background: '#1B61E4', color: 'white', height:'11rem', width: '100%', borderRadius: '.3rem', }}> <FaCar /> </Avatar> 

                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mt: '2rem', gap: '1rem'}}>
                        <Box className="mid-btn back-btn" sx={{width: '11rem'}}>
                            <Typography variant='h5' >Edit</Typography>
                        </Box>
                        <Box className="mid-btn primary-btn" sx={{ width: '11rem'}}>
                            <Typography variant='h5'>Submit</Typography>
                        </Box>
                    </Box>

            </CardContent>
        
        </Card>
    )
}

export const MaintStatusCard = ()=>{

    const {status, setStatus} = ChatState()

    useEffect(() => {
        localStorage.setItem('status', status)
        if(status === 'accepted'){
            
        }
    }, [status])
    return (
        <Card  sx={{ width: '100%', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{ }}>
                <Typography variant='h4' fontWeight={'500'} mb={'2rem'} >Vehicle Maintenance Status</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',gap: '1.5rem', width: '100%'}}>
                    
                    <Box className={status === "pending" ? "pending-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><MdOutlinePendingActions size={'1.6rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Pending</Typography>
                    </Box>                    

                    <GoChecklist id={'accepted'} classname={'accepted-stat stat'} name={'accepted'} title={"Vehicle Status: Accepted"} icon={<GiHomeGarage size={'1.5rem'} />} />

                    <SelectMaintStatusModal id={'in-shop'} classname={'in-shop-stat stat'} name={'In Shop'} title={"Vehicle Status: In Shop"} icon={<GiHomeGarage size={'1.5rem'} />} />

                    <SelectMaintStatusModal id={'in-progress'} classname={'in-progress-stat stat'} name={'In Progress'} title={"Vehicle Status: In Progress"} icon={<GrInProgress size={'1.3rem'} />} />

                    <SelectMaintStatusModal id={'completed'} classname={'completed-stat stat'} name={'Completed'} title={"Vehicle Status: Completed"} icon={<FaSquareCheck size={'1.4rem'} />} />                   

                </Box>
            
            </CardContent>
        
        </Card>
    )
}


export const MaintFeedbackCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', }}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.5rem'} fontWeight={'500'}>Maintenance Report</Typography>
                    
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Vehicle Type</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>Car</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Repair Done</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>No report available.</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Repair done</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>No reports available</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Completion Date</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>31 January, 2024</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Image Report</Typography>
                    <Avatar sizes='10rem' sx={{ background: '#1B61E4', color: 'white', height:'11rem', width: '100%', borderRadius: '.3rem', }}> <FaCar /> </Avatar> 
                    <MaintFeedBackModal />
            </CardContent>
        
        </Card>
    )
}