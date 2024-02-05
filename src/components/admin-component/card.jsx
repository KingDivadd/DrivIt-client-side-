import React, { useRef, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import david from '../../asset/david.jpg'
import { MdOutlinePendingActions } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";
import Avatar from '@mui/material/Avatar';
import { FaCar } from "react-icons/fa6";




export default function ActiveAdminCard ({}){
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', pb: '-.85rem'}}>
            <CardContent>
                <Typography variant="h4" sx={{mb: '1.5rem', display: 'flex', justifyContent: 'center', fontWeight:'400'}} gutterBottom>
                    Admin Personnel
                </Typography>
                <Box sx={{backgroundImage: `url(${david})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',height: '10rem', width: '15rem', borderRadius: '.5rem', m: '0 auto', mb: '1.5rem'}}></Box>
                {/* <Avatar sizes='10rem' sx={{ m: 1,  background: '#1B61E4', color: 'white', height:'7rem', width: '9rem', borderRadius: '.3rem',m: '0 auto' , mb: '1.5rem'}}> <img src={david} alt="" /> </Avatar> */}
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

export const VehicleInformationCard = ({})=>{
    
    const services = ['Oil Change', 'Battery Check', 'Suspension Check', 'Tire Check']
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer' }}>
            <CardContent sx={{ p: '.5rem', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.25rem'} fontWeight={'500'}>Vehicle Information</Typography>


                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Brand:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Toyota</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Name:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Corolla</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Engine No:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>KTU-09EL</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Chasis No:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>ABDEIH09</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Fuel Type:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>PMS</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Vehicle Color:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Blue</Typography>
                    </Box>

                    <Box mt={'.2rem'} mb={'1rem'} sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Current Mileage:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>20,000M</Typography>
                    </Box>

                    <Avatar sizes='10rem' sx={{ background: '#1B61E4', color: 'white', height:'11rem', width: '100%', borderRadius: '.3rem', }}> <FaCar /> </Avatar>

            </CardContent>
        
        </Card>
    )
}

export const VehicleStatusCard = ()=>{
    const [status, setStatus] = useState('completed')

    return (
        <Card  sx={{ width: '100%', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{ }}>
                <Typography variant='h4' fontWeight={'500'} mb={'2rem'} >Vehicle Assignment Status</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',gap: '1.5rem', width: '100%'}}>
                    
                    <Box className={status === "pending" ? "pending-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><MdOutlinePendingActions size={'1.6rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Not Assigned</Typography>
                    </Box>                    


                    <Box className={status === "completed"?"completed-stat stat":"stat"} sx={{}}>
                        <Box className={''} sx={{ display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <FaSquareCheck size={'1.4rem'} /> </Box>
                        <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">Assigned</Typography>
                    </Box> 
                

                </Box>
            
            </CardContent>
        
        </Card>
    )
}


export const VehicleAssigneeCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', }}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.5rem'} fontWeight={'500'}>Vehicle Assignee</Typography>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Last Name:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Oyenuga</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>First Name:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Emmanuel</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Email:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>oyenuga.dgit@gmail.com</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Phone:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>0902600392</Typography>
                    </Box>

            </CardContent>
        
        </Card>
    )
}

export const VehicleDriverCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.5rem'} fontWeight={'500'}>Assigned Driver</Typography>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Last Name:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Oyenuga</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>First Name:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Emmanuel</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'1.25rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Email:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>oyenuga.dgit@gmail.com</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Phone:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>0902600392</Typography>
                    </Box>

            </CardContent>
        
        </Card>
    )
}

export const VehicleMaintCard = ({})=>{
        
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    
    return (
        <Card  sx={{ background: '#FFFFF' , width: '100%', cursor: 'pointer', mt: '.75rem'}}>
            <CardContent sx={{ p: '.5rem', pb: '0', borderRadius: '.5rem' }}>
                    <Typography variant='h4' mb={'1.25rem'} fontWeight={'500'}>Last Maintenance Log</Typography>

                    <Box mt={'.2rem'} mb={'1rem'}  sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Date:</Typography>
                        <Typography variant='h5' fontWeight={'500'}>27 Jan, 2024</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'.85rem'}  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.7rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Issue(s)</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Brake pressure is was low and an unwanted noise from the rear suspension</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'.85rem'}  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.7rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Services</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Brake Inspection/Repair</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'} mb={'.85rem'}  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.7rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>cost</Typography>
                        <Typography variant='h5' fontWeight={'500'}>12,000</Typography>
                    </Box>
                    
                    <Box mt={'.2rem'}  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.7rem'}}>
                        <Typography variant='h5' fontWeight={'400'}>Personnel In Charge</Typography>
                        <Typography variant='h5' fontWeight={'500'}>Eng Oladimeji</Typography>
                    </Box>

            </CardContent>
        
        </Card>
    )
}
