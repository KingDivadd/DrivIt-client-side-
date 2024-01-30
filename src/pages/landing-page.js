import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined } from '@mui/icons-material';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, ServiceChartCard, ActiveDriverCard, LandingPageCard } from 'components/role-card';
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
import five from '../asset/five.png'
import eight from '../asset/eight.png'
import { FaFacebookF } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const LandingPage = ()=>{
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

    return (
        <Grid container sx={{background: '#FAFAFA', height: 'auto', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Box sx={{height: '3rem', width: '100%',background: '#',borderBottom: '1px solid grey', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,p: '0 5rem'}}> 
            
                <Box ><Typography variant={'h4'} fontWeight={'600'}>FleetPro</Typography> </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: '100%', gap: '.75rem',}}>
                    <Box className="primary-btn hollow-btn" onClick={()=> navigate('/login')} sx={{width: '7rem',height: '2.5rem', border: '1px solid #1B61E4'}}>
                        <Typography variant={'h5'} >Login</Typography>
                    </Box>
                    <Box className="primary-btn register" onClick={()=> navigate('/signup')} sx={{height: '2.5rem', width: '7rem'}} >
                        <Typography variant={'h5'}>Register</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{minHeight: '90vh',height: 'auto', hackground: 'cyan',}}>
                {/* the first part */}
                <Grid container component={'main'}  sx={{height: '100%', overflowY: 'hidden'}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', pl: '5rem'}} >
                        <Box sx={{width: '80%', }}>
                            <Typography variant='h1' fontWeight={'700'} lineHeight={'3.5rem'}>Efficient Vehicle Management Made Easy</Typography>
                            <Typography variant='h4' fontWeight={'500'} mt={'1.75rem'} lineHeight={'2rem'}>From preventive maintenance scheduling to repair tracking, this system is designed to simplified to allow you experience seamless management and enhanced productivity. </Typography>
                            <Box className="mid-btn  primary-btn" onClick={()=> navigate('/signup')} sx={{height: '2.75rem', width: '10rem', mt: '2.25rem' }}>
                                <Typography variant={'h5'} fontWeight={'500'}>Create Account</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderRadius: '.3rem', pr: '5rem' }} >
                        {/* in the future wer are to add slider here */}
                        <Box sx={{width: '90%',height: '85%',
                        backgroundImage: `url(${five})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '.3rem',
                        maxWidth: '40rem'
                        }}></Box>
                    </Grid>
                </Grid>
            </Box>
            
            {/* page 2 */}
            <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '6rem 0', background: '#E8F0FC'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',  width: '77.5%', gap: '2rem',}} >
                    <Box sx={{width: '67.5%',mb: '1rem'}}>
                        <Typography variant='h1' textAlign={'center'} fontWeight={'600'}>Discover How our Vehicle Maintenance Web App Simplifies Your Life </Typography>
                    </Box>
                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))', justifyContent: 'space-between', gap: '1rem'}}>
                        <LandingPageCard title={'Hassle-Free Maintenance Scheduling'}  note={'Our user-friendly interface allows you to easily schedule vehicle maintenance, track service history, and receive reminders for upcoming maintenance tasks. Say goodbye to missed appointments and unexpected breakdowns. '} />
                        <LandingPageCard title={'Cost and Time Savings'}  note={`Our advanced analytics and proactive maintenance approach help optimize your fleet's performance, ultimately saving you both time and money. Minimize downtime, reduce unexpected repairs, and maximize the lifespan of your vehicles.`} />
                        <LandingPageCard title={'Simplified Inventory Management '}  note={'With our inventory management feature, you can efficiently track and manage spare parts and supplies. Avoid unnecessary purchases, keep inventory levels optimized, and ensure you always have the right parts on-hand when needed. '} />
                        <LandingPageCard title={'Enhanced Safety and Compliance'}  note={'Stay on top of safety regulations and ensure your vehicles are in compliance with our built-in safety checks and maintenance logs. Maintain a safe working environment for your drivers and ensure your fleet meets all industry standards.'} />
                    </Box>
                    <Box sx={{width: '60%',}}>
                        <LandingPageCard title={'Comprehensive Reporting and Analysis '}  note={`Gain valuable insights into your fleet's maintenance activities with our robust reporting tools. Monitor key performance indicators, identify trends, and make data-driven decisions to improve the overall efficiency of your fleet. `}/>
                    </Box>
                </Box> 
            </Box>

            {/* page 3 */}
            <Box sx={{width: '100%', display: 'flex',flexDirection: 'column', alignItems: 'center', gap: '3rem', background: 'whitesmoke', p: '5rem 0'}}>
                <Box >
                    <Typography variant='h1' textAlign={'center'} mb={'.75rem'} fontWeight={'600'} >Get Access To Diverse Services</Typography>
                    <Typography variant='h4' textAlign={'center'} fontWeight={'500'} >We show you loads of service options you get to when you use this application</Typography>
                </Box>
                <Box sx={{
                    height: '60vh', width: '100%',
                    backgroundImage: `url(${eight})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '.3rem',
                }}></Box>
            </Box>

            {/* footer */}
            <Grid  sx={{background: '#1B61E4',width: '100%', padding: '3rem 5rem'}}>
                <Grid  container component={'main'} >
                    <Grid item xs={12} md={6} lg={6} mb={'1rem'}>
                        <Typography variant='h4' mb={'.75rem'} fontWeight={'600'} color={'white'}>Take your designs to new dimensions</Typography>
                        <Typography variant='h5' lineHeight={'1.75rem'} fontWeight={'500'} color={'white'}>Let us unleash our creativity and expertise to create designs that deliver extraordinary results. </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Box className="mid-btn primary-btn send-msg" sx={{width: '13rem', height: '2.5rem',}} >
                            <Typography variant='h5' fontWeight={'500'} >Send us a message</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item container spacing={'1.5rem'} xs={12} sx={{background: '#E8F0FC'}} minHeight={'3.5rem'} padding={'0 .5rem'} borderRadius={'.3rem'} m={'1.5rem 0'} >
                    <Grid item s={12} md={4} lg={4} sx={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-start', gap:'.5rem'}}>
                        <Avatar sx={{background: '#1B61E4', height: '2rem', width: '2rem', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                            <FaFacebookF color={'white'} sx={{background: '#1B61E4'}} size={'1.15rem'}/>
                        </Avatar>
                        <Avatar sx={{background: '#1B61E4', height: '2rem', width: '2rem', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                            <FaInstagram color={'white'} sx={{background: '#1B61E4'}} size={'1.15rem'}/>
                        </Avatar>
                        <Avatar sx={{background: '#1B61E4', height: '2rem', width: '2rem', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                            <FaLinkedinIn color={'white'} sx={{background: '#1B61E4'}} size={'1.15rem'}/>
                        </Avatar>
                    </Grid>
                    <Grid item s={12} md={4} lg={4}sx={{display: 'flex',  alignItems: 'center', justifyContent: 'center'}} ><Typography variant={'h5'} fontWeight={'500'}>© 2023 Rayna. All rights reserved.</Typography> </Grid>
                    <Grid item s={12} md={4} lg={4}sx={{display: 'flex',  alignItems: 'center', justifyContent: 'flex-end'}} > <Typography variant='h4' fontWeight={'500'}>FleetPro</Typography> </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default LandingPage