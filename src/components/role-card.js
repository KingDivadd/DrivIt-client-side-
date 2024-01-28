import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { PersonOutlineOutlined,NotificationsActiveOutlined } from '@mui/icons-material';
import { ChatState } from 'context/chatContext';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


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
    <Card onClick={()=> handleRole("vehicle_assignee")} sx={{ minWidth: '22rem', height: '10rem', cursor: 'pointer' }}>
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
                <Avatar sx={{ bgcolor: 'primary.light', color: 'cornflowerblue', height: '4.5rem', width: '4.5rem', borderRadius: '.3rem', }}> {icon} </Avatar>
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

    
    return (
        <Card  sx={{ bgcolor:'primary.light' , width: '100%', height: '20rem', cursor: 'pointer' }}>
            <CardContent>
            <Typography variant="h5" gutterBottom>
                Maintenacne Jobs Analytics
            </Typography>
            <Typography variant="h6" component="div">
                An individual that legally posseses and has ownership rights over a particular vehicle.
            </Typography>
            
            </CardContent>
        
        </Card>
    )
}

export const ServiceChartCard = ({})=>{

    
    return (
        <Card  sx={{ bgcolor:'primary.light' , width: '100%', height: '25rem', cursor: 'pointer' }}>
            <CardContent>
            <Typography variant="h5" gutterBottom>
                Maintenacne Jobs Analytics
            </Typography>
            <Typography variant="h6" component="div">
                An individual that legally posseses and has ownership rights over a particular vehicle.
            </Typography>
            
            </CardContent>
        
        </Card>
    )
}
export const ActiveDriverCard = ({})=>{

    
    return (
        <Card  sx={{ bgcolor:'primary.light' , width: '100%', height: '20rem', cursor: 'pointer', }}>
            <CardContent>
                <Typography variant="h4" sx={{mb: '1.5rem', display: 'flex', justifyContent: 'center', fontWeight:'400'}} gutterBottom>
                    Assigned Driver
                </Typography>
                <Avatar sizes='10rem' sx={{ m: 1,  background: 'cornflowerblue', color: 'white', height:'7rem', width: '7rem', borderRadius: '.3rem',m: '0 auto' , mb: '1.5rem'}}> <PersonOutlineOutlined /> </Avatar>
                <Typography variant="h6" component="div" sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Typography variant="h4" sx={{mb: '1rem'}} gutterBottom>
                        { "Iroegbu David"}
                    </Typography>
                    <Typography variant="h5" sx={{mb: '1rem'}} gutterBottom>
                        {"FUTA/12/2022"}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {"09026030392"}
                    </Typography>
                </Typography>
            
            </CardContent>
        
        </Card>
    )
}

export const WorkbayMaintCard = ({})=>{
    
    const services = ['Oil Change', 'Battery Check', 'Suspension Check', 'Tire Check']
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ bgcolor:'primary.light' , width: '100%', cursor: 'pointer' }}>
            <CardContent sx={{ p: '.5rem', borderRadius: '.5rem' }}>
                    <Typography variant='h5' mb={'1.25rem'} fontWeight={'500'}>Services</Typography>
                    <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))', justifyContent: 'start', gap: '.75rem'}} mb={'1.25rem'}>

                        {services.map((data, ind)=>{
                            return(
                                <Box key={ind} className='small-rounded-btn' sx={{height: '2rem', p: '0 .5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.3rem', border: '1px solid gray'}}>
                                    <Typography variant='h7' fontWeight={'500'}>{data}</Typography>
                                </Box>
                            )
                        })}

                    </Box>
                    <Typography variant='h5' mt={'.2rem'} mb={'.75rem'} fontWeight={'400'}>Concerns</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>
                        The Battery keeps running down when parked for long, and the brake pressure when applied is lower then normal
                    </Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Current Mileage</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>120,000km</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Maintenance Date</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>30 January, 2024</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Supervisor</Typography>
                    <Typography variant='h6' fontWeight={'500'}>Engr Oladimaji</Typography>
            </CardContent>
        
        </Card>
    )
}



export const StatusCard = ({value, icon, suffix})=>{

    return (
        <Card  sx={{ minWidth: '18rem', height: '7.5rem', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',gap: 1.5,  }}>
                <Avatar sx={{ bgcolor: 'primary.light', color: 'cornflowerblue', height: '5rem', width: '5rem', borderRadius: '.3rem', mt: '.25rem' }}> {icon} </Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start', mt: '.25rem'}}>
                    <Typography variant="h5" component="div" sx={{height: '2.75rem', fontWeight: '500'}}>
                        Status
                    </Typography>
                    <Typography variant="h6" component="div">
                        {value}{suffix}
                    </Typography>

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
        <Card  sx={{ bgcolor:'primary.light' , width: '100%', cursor: 'pointer', }}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.5rem'} fontWeight={'500'}>Personal Feeback</Typography>
                    
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Vehicle Type</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>Car</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Repair Done</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>No report available.</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Repair done</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>No reports available</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Completion Date</Typography>
                    <Typography variant='h6' mb={'1.25rem'} fontWeight={'500'}>31 January, 2024</Typography>
                    <Typography variant='h5' mb={'.75rem'} fontWeight={'400'}>Image Report</Typography>
                    <Avatar sizes='10rem' sx={{ background: 'cornflowerblue', color: 'white', height:'7rem', width: '100%', borderRadius: '.3rem', }}> <PersonOutlineOutlined /> </Avatar>        
            </CardContent>
        
        </Card>
    )
}

export const ReportCard = ({image, location, description})=>{

    return (
        <Card  sx={{ minWidth: '15rem', cursor: 'pointer', p: '0' }}>
            <CardContent sx={{p: '0 .5rem'}}>
                <Box sx={{backgroundImage: `url(${image})`,
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
                    <Typography variant={'h6'} fontWeight={'500'} mb={'.5rem'} >{location}</Typography>

                    <Typography variant={'h6'} fontWeight={'400'} mb={'.5rem'} >Description</Typography>
                    <Typography variant={'h6'} fontWeight={'500'}  >{description}</Typography>
                </Box>
            </CardContent>
        
        </Card>
    )
}