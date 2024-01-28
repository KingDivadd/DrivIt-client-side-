import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined } from '@mui/icons-material';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, ServiceChartCard, ActiveDriverCard } from 'components/role-card';
// import '../index.css'
import { IoMdHome } from "react-icons/io";
import { MdNoteAlt,MdHelpCenter } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { RiLogoutBoxFill } from "react-icons/ri";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { GiPathDistance, GiAutoRepair } from "react-icons/gi";
import { BsCalendarEventFill ,BsCalendar2PlusFill} from "react-icons/bs";
import SideBar from 'components/side-bar';
import SideBarMobile from 'components/side-bar-mobile'
import MenuBar from 'components/menu-bar';

const Dashboard = ()=>{
    const [page, setPage] = useState("")
    const navigate = useNavigate()
    const [menuIcon, setMenuIcon] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const resize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => { 
        const getPage = localStorage.getItem("page")
        setPage(getPage)
        window.addEventListener('resize', resize)
        if (width <= 599 ){
            setMenuIcon(true)
        }
        if (width > 599){
            setMenuIcon(false)
        }
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])

    
    const handlePage = (value)=>{
        console.log(value)
        localStorage.setItem("page", value)
        navigate(`/${value}`)
    }

    return (
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden'}}>
            {menuIcon && <SideBarMobile />}
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{background: 'white', height: '100vh', overflowY:'auto'}} >
                <Box sx={{width: '100%', height: 'auto'}}>
                {/* right top secction */}
                <MenuBar />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.75rem'}}  >
                    <Grid  item xs={12} sm={12} md={7.5} lg={8.5}  sx={{background: 'whitesmoke', borderRadius: '.3rem', overflowY:'auto', p: '.75rem'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start', gap: 1 }}>
                            <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Welcome {"David"}</Typography>
                            <Typography component="h5" variant="h4">Everything you need to know about you vehicle.</Typography>
                        </Box>
                        <Box sx={{mt: '2rem',display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '.75rem',}}>
                            <DashCard title={'Planned Maintenance'} value={0} icon={ <TfiLayoutAccordionList size={'2rem'} color='cornflowerblue' />} suffix={""} />
                            <DashCard title={"Current Location"} value={"Akure, Obanla"} icon={<FaLocationDot size={'2rem'} color='orangered' />} suffix={""} />
                            <DashCard title={"Total Mileage Covered"} value={"120,579"} icon={<GiPathDistance  size={'2rem'} color='orangered'/>} suffix={"Km"} />
                            <DashCard title={"Last Recored Mileage"} value={"200"} icon={<BsCalendarEventFill  size={'2rem'} color='green'/>} suffix={"Km"} />
                            <DashCard title={"Last Recored Maintenance"} value={"28 January, 2024"} icon={<BsCalendarEventFill size={'2rem'} color='cornflowerblue' />} suffix={""} />
                            <DashCard title={"Next Maintenance Job"} value={"10 Febuary, 2024"} icon={<BsCalendar2PlusFill size={'2rem'} color='brown' />} suffix={""} />
                        </Box>
                        <Box sx={{mt: '2.5rem'}}>
                            <MaintAnalyticsCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4.5} lg={3.5} sx={{ overflowY:'auto', p: '0 .5rem', pl:'.75rem'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start', gap: '.75rem' }}>
                            <ActiveDriverCard />
                            <ServiceChartCard />
                        </Box>

                    </Grid>
                </Grid>
                </Box>
            </Grid> 
        </Grid>
    )
}

export default Dashboard