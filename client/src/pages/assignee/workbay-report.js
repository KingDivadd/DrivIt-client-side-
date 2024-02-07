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
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, FeedbackCard, StatusCard, WorkbayMaintCard } from 'components/role-card';
import Table, { CustomizedTables, ReactVirtualizedTable } from 'components/table';
import { IoSearch } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { FaArrowLeft, FaCheckSquare } from "react-icons/fa"
import { MdOutlinePendingActions } from "react-icons/md";
import SideBar from '../../components/side-bar'
import MenuBar from 'components/menu-bar';
import { AiOutlineRollback } from "react-icons/ai";


const WorkbayReport = ()=>{
    const [rowInfo, setRowInfo] = useState(null)
    const [text, setText] = useState("")
    const {setOpenAlert, setAlertMsg, setAlertSeverity} = ChatState()
    const navigate = useNavigate()

    useEffect(() => {
        const workbayRow = JSON.parse(sessionStorage.getItem('workbayRow'))
        if (workbayRow === null){
            navigate(-1)
        }else{
            setRowInfo(workbayRow)
        }

    }, [])
    
    return (
        <>
        {rowInfo !== null && <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <SideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ overflowY:'auto', height: '100vh'}} >
                <Box sx={{width: '100%', height: 'auto'}}>
                {/* right top section */}
                <MenuBar />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden"}}  >
                    <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'1rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '2rem' }} >
                            <Typography variant='h3' sx={{fontWeight: '600'}}>{rowInfo.maint_id}</Typography>
                            
                            {rowInfo.status ==="pending" && <Box className={ "pending-stat stat"} sx={{width: '10rem', gap: '.5rem'}}>
                                <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><MdOutlinePendingActions size={'1.6rem'} /> </Box>
                                <Typography variant="h5" fontWeight={'500'}  component="div">Pending</Typography>
                            </Box>   }                 

                            {rowInfo.status ==="accepted" && <Box className={ "accepted-stat stat"} sx={{width: '10rem', gap: '.5rem'}}>
                                <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}><MdOutlinePendingActions size={'1.6rem'} /> </Box>
                                <Typography variant="h5" fontWeight={'500'}  component="div">Accepted</Typography>
                            </Box>   }                 

                            {rowInfo.status ==="in-shop"  && <Box className={"in-shop-stat stat"} sx={{width: '10rem', gap: '.5rem'}}>
                                <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <GiHomeGarage size={'1.5rem'} /> </Box>
                                <Typography variant="h5" fontWeight={'500'}  component="div">In Shop</Typography>
                            </Box> }                   

                            {rowInfo.status === "in-progress" && <Box className={"in-progress-stat stat"} sx={{width: '10rem', gap: '.5rem'}}>
                                <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <GrInProgress size={'1.3rem'} /> </Box>
                                <Typography variant="h5" fontWeight={'500'}  component="div">In Progress</Typography>
                            </Box> }                   

                            {rowInfo.status === "completed" && <Box className={"completed-stat stat"} sx={{width: '10rem', gap: '.5rem'}}>
                                <Box className={''} sx={{ display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}> <FaSquareCheck size={'1.4rem'} /> </Box>
                                <Typography variant="h5" fontWeight={'500'}  component="div">Completed</Typography>
                            </Box> }

                        </Box>
                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between',width: '100%'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
                                <Box className='mid-btn back-btn' onClick={()=> navigate(-1)}  sx={{width: '8rem'}} >
                                    <AiOutlineRollback  size={'1.5rem'} />
                                    <Typography variant='h5' sx={{ml: '.5rem'}}>Back</Typography> 
                                </Box>
                                
                            </Box>
                            <Box sx={{width: '100%', height: '100%',display: 'flex', justifyContent: 'flex-end'}}>
                                <Box className='mid-btn hollow-btn' bgColor='primary.light' sx={{width: '8rem',height: '2.5rem'}}>
                                    Export
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.5rem'}}>
                        {/* the table */}
                        <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between', gap: '.75rem'}}>
                            {/* The left side */}
                            <Box sx={{width: '100%'}}>
                                <WorkbayMaintCard data={rowInfo} />
                                <StatusCard data={rowInfo}/>
                                
                            </Box>
                            {/* the right side */}
                            <Box sx={{width: '100%'}}>
                                <FeedbackCard />
                            </Box>
                        </Box> 
                    </Box>
                </Grid>
                </Box>
            </Grid> 
        </Grid>} </>
    )
}

export default WorkbayReport