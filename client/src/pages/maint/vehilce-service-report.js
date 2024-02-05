import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined, LensBlurRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, FeedbackCard, MaintStatusCard, WorkbayMaintCard, MaintReportCard, MaintFeedbackCard } from 'components/role-card';
import Table, { CustomizedTables, ReactVirtualizedTable } from 'components/table';
import { IoSearch } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { FaArrowLeft, FaCheckSquare } from "react-icons/fa"
import { MdOutlinePendingActions } from "react-icons/md";
import SideBar from '../../components/side-bar'
import MaintSideBar from 'components/maint-side-bar';
import MaintSideBarMobile from 'components/maint-side-bar-mobile';
import MenuBar from 'components/menu-bar';
import { AiOutlineRollback } from "react-icons/ai";
import { AcceptRequestModal } from 'components/modal'; 
import { GrInProgress } from "react-icons/gr";
import { GiHomeGarage } from "react-icons/gi";
import { FaSquareCheck } from "react-icons/fa6";



const VehicleServiceReport = ()=>{
    const [page, setPage] = useState("")
    const [text, setText] = useState("")
    const [age, setAge] = useState("")
    const [report, setReport] = useState(true)
    const navigate = useNavigate()
    const {status, setStatus} = ChatState()

    

    const handlePage = (value)=>{
        console.log(value)
        localStorage.setItem("page", value)
        navigate(`/${value}`)
    }
    
    const handlePlanMaint = ()=>{
        console.log("plan maintenance")
    }
    
    const handleWorkbay = (e)=>{
        setText(e.target.value)
    }
    
    const handleChange = (e)=>{
        setAge(e.target.value)
    }
    const handleBack = ()=>{
        console.log('going back')
        navigate(-1)
    }
    const handleShowReport = ()=>{
        if (!report){setReport(true)}
    }
    const handleShowFeedback = ()=>{
        if(report){setReport(false)}
    }
    return (
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            {/* <SideBar /> */}
            <MaintSideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ overflowY:'auto', height: '100vh'}} >
                <Box sx={{width: '100%', height: 'auto'}}>
                {/* right top section */}
                <MenuBar />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden"}}  >
                    <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'1rem',}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '.75rem' }} >
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
                                <Box className='mid-btn back-btn' onClick={()=> navigate(-1)} sx={{width: '7rem',}}>
                                    <AiOutlineRollback size={'1.35rem'} />
                                    <Typography variant='h5' sx={{ml: '.5rem'}}>Back</Typography> 
                                </Box>
                                <Typography variant='h3' sx={{fontWeight: '600'}}>FUTAWORK-0010</Typography>
                            </Box>

                            {status=== "pending" &&<Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .75rem' }}>
                                <MdOutlinePendingActions size={'1.5rem'} color={'#1B61E4'} />
                                <Typography variant='h5' sx={{fontWeight: '500'}}>Pending</Typography>
                            </Box>}

                            {status=== "accepted" &&<Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .75rem' }}>
                                <GiHomeGarage size={'1.5rem'} />
                                <Typography variant='h5' sx={{fontWeight: '500'}}>Accepted</Typography>
                            </Box>}

                            {status=== "in-shop" &&<Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .75rem' }}>
                                <GiHomeGarage size={'1.5rem'} />
                                <Typography variant='h5' sx={{fontWeight: '500'}}>In Shop</Typography>
                            </Box>}

                            {status=== "in-progress" &&<Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .75rem' }}>
                                <GrInProgress size={'1.3rem'} />
                                <Typography variant='h5' sx={{fontWeight: '500'}}>In Progress</Typography>
                            </Box>}

                            {status=== "completed" &&<Box bgColor='primary.light' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap: '1rem', border: '1px solid gray', height: '2.5rem', borderRadius: '.3rem', p: '0 .75rem' }}>
                                <FaSquareCheck size={'1.4rem'} />
                                <Typography variant='h5' sx={{fontWeight: '500'}}>Completed</Typography>
                            </Box>}

                        </Box>

                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',justifyContent: 'space-between',width: '100%', gap: '.75rem' }}>
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',justifyContent: 'flex-start' ,alignItems: 'flex-end', gap: '.75rem'}}>
                                <Box onClick={handleShowReport} className={report ? "mid-btn active-report" : " mid-btn in-active-report"} sx={{width: '10rem'}}><Typography variant='h5'>Information Page</Typography></Box>
                                <Box onClick={handleShowFeedback} className={report ? "mid-btn in-active-report" : "mid-btn active-report"} sx={{width: '11.75rem'}}><Typography variant='h5'>Personnel Report</Typography> </Box>
                            </Box>
                            <Box sx={{width: '100%', height: '100%',display: 'flex', justifyContent: 'flex-end'}}>
                                <AcceptRequestModal />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.5rem'}}>
                        {/* the table */}
                        <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between', gap: '.75rem'}}>
                            {/* The left side */}
                            <Box sx={{width: '100%'}}>
                                <WorkbayMaintCard />
                                <MaintStatusCard/>
                                
                            </Box>
                            {/* the right side */}
                            <Box sx={{width: '100%'}}>
                                {report? 
                                <MaintFeedbackCard />:
                                <MaintReportCard />}
                                
                            </Box>
                        </Box> 
                    </Box>
                </Grid>
                </Box>
            </Grid> 
        </Grid>
    )
}

export default VehicleServiceReport;