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
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { GiPathDistance, GiAutoRepair } from "react-icons/gi";
import { BsCalendarEventFill ,BsCalendar2PlusFill} from "react-icons/bs";
import SideBar from 'components/side-bar';
import SideBarMobile from 'components/side-bar-mobile'
import MenuBar from 'components/menu-bar';
import CircularAnimation from 'components/skeleton'

const Dashboard = ()=>{
    const [user, setUser] = useState({})
    const [render, setRender] = useState(true)
    const {setAlertMsg, setAlertSeverity, setOpenAlert} = ChatState()
    const navigate = useNavigate()
    const [menuIcon, setMenuIcon] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const resize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => { 
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo !== null){
            setUser(userInfo)
            setRender(false)
        }
        if (userInfo === null){
            fetchUserInfo()
        }
        
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
    }, [width, user.loggedInUser, navigate])


        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                const userInfo = await axios.post("https://futa-fleet-guard.onrender.com/api/user/find-user",
                {},{
                    headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                    }
                }
                );
                setUser(userInfo.data);
                setRender(false)
                // setInterval(fetchUserInfo)
            } catch (err) {
                console.log(err)
                if (!navigator.onLine) {
                setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true);
                // setInterval(fetchUserInfo, 3000)
                } else if (err.response) {
                // Handle server errors
                setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                navigate('/')
            } else {
                // Handle network errors
                setAlertMsg("An error occurred"); setAlertSeverity("error"); setOpenAlert(true);
                navigate('/')
                }
            }
            };

    

    return (
        <>
        {render ? <CircularAnimation />:

        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden', background: '#FAFAFA'}}>
            {menuIcon && <SideBarMobile />}
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{background: '#FAFAFA', height: '100vh', overflowY:'auto'}} >
                <Box sx={{width: '100%', height: 'auto'}}>
                {/* right top secction */}
                <MenuBar img={user.loggedInUser.pic} />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.75rem'}}  >
                    <Grid  item xs={12} sm={12} md={7.5} lg={8.5}  sx={{background: '#FAFAFA', borderRadius: '.3rem', overflowY:'auto', p: '.75rem', pr:'0'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start', gap: 1 }}>
                            <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Welcome {user.loggedInUser.firstName}</Typography>
                            <Typography component="h5" variant="h4">Everything you need to know about your vehicle.</Typography>
                        </Box>
                        <Box sx={{mt: '2rem',display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '.75rem',}}>
                            <DashCard title={'Planned Maintenance'} value={user.dashboard.major_maint_job} icon={ <TfiLayoutAccordionList size={'2rem'} color='#1B61E4' />} suffix={""} />
                            <DashCard title={"Current Location"} value={user.dashboard.current_location} icon={<FaLocationDot size={'2rem'} color='orangered' />} suffix={""} />
                            <DashCard title={"Total Mileage Covered"} value={user.dashboard.total_mileage} icon={<GiPathDistance  size={'2rem'} color='orangered'/>} suffix={"Km"} />
                            <DashCard title={"Last Recored Mileage"} value={"200"} icon={<BsCalendarEventFill  size={'2rem'} color='green'/>} suffix={"Km"} />
                            <DashCard title={"Last Recored Maintenance"} value={user.dashboard.last_recorded_maint} icon={<BsCalendarEventFill size={'2rem'} color='#1B61E4
                            ' />} suffix={""} />
                            <DashCard title={"Next Maintenance Job"} value={"10 Febuary, 2024"} icon={<BsCalendar2PlusFill size={'2rem'} color='brown' />} suffix={""} />
                        </Box>
                        <Box sx={{mt: '.75rem'}}>
                            <MaintAnalyticsCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4.5} lg={3.5} sx={{ overflowY:'auto', p: '0 .5rem', pl:'.75rem'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start', gap: '.75rem' }}>
                            <ActiveDriverCard info={user.assigned_driver} />
                            <ServiceChartCard />
                        </Box>

                    </Grid>
                </Grid>
                </Box>
            </Grid> 
        </Grid>}
        </>
    )
}

export default Dashboard