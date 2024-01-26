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
        <Card  sx={{ minWidth: '18rem', height: '7.5rem', cursor: 'pointer' }}>
            <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',gap: 1.5,  }}>
                <Avatar sx={{ bgcolor: 'primary.light', color: 'cornflowerblue', height: '5rem', width: '5rem', borderRadius: '.3rem', mt: '.25rem' }}> {icon} </Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start', mt: '.25rem'}}>
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