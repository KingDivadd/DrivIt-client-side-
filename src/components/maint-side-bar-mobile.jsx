import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined } from '@mui/icons-material';
import { Button, Box, Typography, useTheme, useMediaQuery, Hidden } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, ServiceChartCard, ActiveDriverCard } from 'components/role-card';
// import '../index.css'
import { MdNoteAlt,MdHelpCenter } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaCar ,FaTools} from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { RiLogoutBoxFill,RiArrowGoBackFill } from "react-icons/ri";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { GiPathDistance, GiAutoRepair } from "react-icons/gi";
import { BsCalendarEventFill ,BsCalendar2PlusFill} from "react-icons/bs";
import { AiOutlineRollback } from "react-icons/ai";

const MaintSideBarMobile = ()=>{
    const [page, setPage] = useState("")

    const {menu, setMenu} = ChatState()
    const navigate = useNavigate()

    useEffect(() => {
        const pathname = window.location.pathname;
        const parts = pathname.split('/');
        let lastPart = parts[parts.length - 1];

        if(parts.length === 3){
            lastPart = parts[parts.length - 2]
        }
        setPage(lastPart)
    }, [page])

    const handlePage = (value)=>{
        navigate(`/${value}`)
    }

    const handleMenu =()=>{
        if (menu){
            setMenu(false)
        }
        if (!menu){
            setMenu(true)
        }
    }

    return (
        
        <Grid className={menu?"show-menu":"hide-menu"} item container sx={{p: '.25rem', background: '#1B61E4', height: '100vh', width: '15rem',}} >
            <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" >
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',width: '100%',pt: '.75rem', alignItems: 'flex-start',pl: '.5rem', pr: '.5rem'}}>
                    <Typography component={"h2"} variant='h4' color={'white'} sx={{fontWeight: '500'}}>FleetPro</Typography>
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={handleMenu} >
                        <AiOutlineRollback size={'1.5rem'} color={'white'} /> 
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,  width: '100%', mt: '-12rem'}}>
                    <Box className={page === "dashboard" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("dashboard")} sx={{width: '100%', }} >
                        <Box className="icon">
                            <FaHouse size={'1.4rem'} />
                        </Box>
                        <Typography variant='h5' >Dashboard</Typography> 
                    </Box>

                    <Box className={page === "vehicle-service" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("vehicle-service")} sx={{width: '100%', }}>
                        <Box className="icon">
                            <FaTools size={'1.3rem'} />
                        </Box>
                        <Typography variant='h5'>Vehicle Service</Typography> 
                    </Box>

                    <Box className={page === "maint-history" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("maint-history")} sx={{width: '100%', }} >
                        <Box className="icon">
                            <CgNotes size={'1.3rem'} />
                        </Box>
                        <Typography variant='h5'>Service History</Typography> 
                    </Box>
                    
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,  width: '100%', mb: '1.5rem' }}>
                    <Box className='btn-1' sx={{width: '100%', }} >
                        <Box className="icon">
                            <VscFeedback size={'1.5rem'} />
                        </Box>
                        <Typography variant='h5'>Feedback</Typography> 
                    </Box>
                    <Box className='btn-1' sx={{width: '100%', }}>
                        <Box className="icon">
                            <MdHelpCenter size={'1.5rem'} />
                        </Box>
                        <Typography variant='h5'>Help Center</Typography> 
                    </Box>
                    <Box className='btn-1 warning-btn-1' onClick={()=> handlePage("/")}  sx={{width: '100%', }} >
                        <Box className="icon">
                            <RiLogoutBoxFill size={'1.5rem'} />
                        </Box>
                        <Typography variant='h5'>Log Out</Typography> 
                    </Box>
                </Box>
                
            </Grid>
        </Grid>
    )
}

export default MaintSideBarMobile