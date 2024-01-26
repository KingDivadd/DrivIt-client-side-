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
import MaintPersonnel, { Assigee, DashCard, DriverCard, MaintAnalyticsCard, ServiceChartCard, ActiveDriverCard } from 'components/role-card';
import Table, { CustomizedTables, ReactVirtualizedTable } from 'components/table';
import { IoSearch } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WorkModal from 'components/modal';


const Workbay = ()=>{
    const [page, setPage] = useState("")
    const [text, setText] = useState("")
    const [age, setAge] = useState("")
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const getPage = localStorage.getItem("page")
        setPage(getPage)
    }, [])
    const handlePage = (value)=>{
        console.log(value)
        localStorage.setItem("page", value)
        navigate(`/${value}`)
    }

    const handlePlanMaint = ()=>{
        console.log("plan maintenance")
        if(modal){
            setModal(false)
        }
        if (!modal){
            setModal(true)
        }
    }

    const handleWorkbay = (e)=>{
        setText(e.target.value)
    }

    const handleChange = (e)=>{
        setAge(e.target.value)
    }
    return (
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'auto',}}>
            <Grid item container xs={0} sm={4} md={2.5} lg={2} sx={{overflowY:'auto', p: '.25rem', background: 'cornflowerblue', height: '100vh'}} >
                <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" >
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                        <Typography component={"h2"} variant='h2' color={'white'} sx={{fontWeight: '500'}}>DRIVIT</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,  width: '100%', mt: '-14rem'}}>
                        <Box className={page === "dashboard" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("dashboard")} sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Dashboard</Typography> 
                        </Box>
                        <Box className={page === "workbay" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("workbay")} sx={{width: '100%', pl: 2, }}>
                            <Typography variant='h5'>Workbay</Typography> 
                        </Box>
                        <Box className={page === "vehicle-log" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("vehicle-log")} sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Vehicle log</Typography> 
                        </Box>
                        <Box className={page === "assigned-vehicle"? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("assigned-vehicle")} sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Assigned Vehicle</Typography> 
                        </Box>
                        <Box className={page === "reports" ? 'btn-1 active-btn-1': 'btn-1'} onClick={()=> handlePage("reports")} sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Reports</Typography> 
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,  width: '100%', mb: '1.5rem' }}>
                        <Box className='btn-1' sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Feedback</Typography> 
                        </Box>
                        <Box className='btn-1' sx={{width: '100%', pl: 2, }}>
                            <Typography variant='h5'>Help Center</Typography> 
                        </Box>
                        <Box className='btn-1 warning-btn-1' sx={{width: '100%', pl: 2, }} >
                            <Typography variant='h5'>Log Out</Typography> 
                        </Box>
                    </Box>
                    
                </Grid>
            </Grid>
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{background: 'gray', overflowY:'auto'}} >
                {/* right top section */}
                <Box sx={{background: 'white',height: '3rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Box>left</Box>
                    <Box sx={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <Avatar sizes='2rem' sx={{ m: 1, bgcolor: 'primary.light', color: 'cornflowerblue' }}> <NotificationsActiveOutlined /> </Avatar>
                        </Box>
                        <Box>
                            <Avatar sx={{ m: 1, bgcolor: 'warning.main', color: 'cornflowerblue' }}> <PersonOutlineOutlined  sx={{color: 'cornflowerblue'}} /> </Avatar>
                        </Box>
                    </Box>
                </Box>
                {/* right bottom section */}
                <Grid container sx={{ mt: '.75rem',  p: '0 .75rem', overflow: "hidden"}}  >
                    <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'1rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '2rem' }} >
                            <Typography variant='h2' sx={{fontWeight: '600'}}>Workbay</Typography>
                            <WorkModal />
                        </Box>
                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between',width: '100%'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
                                    <Box sx={{position: 'absolute', p: '.2rem', height: '100%', left: '.15rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><IoSearch size={'1.5rem'} /></Box>
                                    <input className='input  search-input' name = 'serch-text' value={text} placeholder='Search for maint. logs' onChange={(e)=> handleWorkbay(e) }type="text" style={{width: '23rem', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray', paddingLeft: '2.5rem'}}/>   
                                </Box>
                                {/* <Box className='btn-1' sx={{width: '10rem', pl: 2, background: 'white', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' , gap: '.5rem', border: '1px solid gray', }}>
                                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}><IoFilterOutline size={'1.5rem'} /></Box>
                                    <Typography variant='h5' fontWeight={'500'}>Filter</Typography> 
                                </Box>
                                <Box className='btn-1' sx={{width: '10rem', pl: 2, background: 'white', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' , gap: '.5rem', }}>
                                    <FormControl fullWidth>
                                        <InputLabel size='small' id="demo-select-small-label">Age</InputLabel>
                                        <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Age" onChange={handleChange} >
                                            <MenuItem  sx={{height: '2.5rem'}} value={10}><Typography variant='h5' fontWeight={'400'}>Oone</Typography></MenuItem>
                                            <MenuItem sx={{height: '2.5rem'}}  value={20}><Typography variant='h5' fontWeight={'400'}>Two</Typography></MenuItem>
                                            <MenuItem  sx={{height: '2.5rem'}} value={30}><Typography variant='h5' fontWeight={'400'}>Three</Typography></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> */}
                            </Box>
                            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', height: '100%', alignItems: 'center' }}>
                                <input type="date" name="" id="" style={{height: '2.5rem', width: '9rem', outline: 'none', padding: '0 .75rem', fontSize: '1rem'}} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{width: '100%',  mt: '.75rem',background: 'white', borderRadius: '.3rem',p:'1rem'}}>
                        {/* the table */}
                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden'}}>
                            <CustomizedTables />
                        </Box> 
                    </Box>
                </Grid>
            </Grid> 
        </Grid>
    )
}

export default Workbay