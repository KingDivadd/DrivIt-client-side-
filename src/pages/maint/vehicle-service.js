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
import Table, { CustomizedTables, ReactVirtualizedTable, VehicleServiceTables } from 'components/table';
import { IoSearch } from "react-icons/io5";
import Select from '@mui/material/Select';
import SideBar from 'components/side-bar';
import MaintSideBar from 'components/maint-side-bar';
import MenuBar from 'components/menu-bar';


const VehicleService = ()=>{
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
        <Grid container component={'main'}  sx={{height: '100vh', overflowY: 'hidden',}}>
            <MaintSideBar />
            {/* right side */}
            <Grid item xs={12} sm={8} md={9.5} lg={10} direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ overflowY:'auto', height: '100vh'}} >
                <Box sx={{width: '100%', height: 'auto'}}>
                {/* right top section */}
                <MenuBar />
                {/* right bottom section */}
                <Grid container sx={{ mt: '.5rem',  p: '0 .5rem', overflow: "hidden"}}  >
                    <Box sx={{width: '100%', background: 'white', borderRadius: '.3rem',p:'.75rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '2rem' }} >
                            <Typography variant='h2' sx={{fontWeight: '600'}}>Vehicle Service</Typography>
                        </Box>
                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',justifyContent: 'space-between',width: '100%'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
                                    <Box sx={{position: 'absolute', p: '.2rem', height: '100%', left: '.15rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><IoSearch size={'1.5rem'} /></Box>
                                    <input className='input  search-input' name = 'serch-text' value={text} placeholder='Search for maint. logs' onChange={(e)=> handleWorkbay(e) }type="text" style={{width: '23rem', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray', paddingLeft: '2.5rem'}}/>   
                                </Box>
                            </Box>
                            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', height: '100%', alignItems: 'center' }}>
                                <input className='input' onChange={(e)=> console.log(e.target.value)} type="date" name="" id="" style={{height: '2.5rem', width: '11rem', outline: 'none', padding: '0 .75rem', fontSize: '1rem'}} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{width: '100%',  mt: '.5rem',background: 'white', borderRadius: '.3rem',p:'.75rem'}}>
                        {/* the table */}
                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden'}}>
                            <VehicleServiceTables />
                        </Box> 
                    </Box>
                </Grid>
                </Box>
            </Grid> 
        </Grid>
    )
}

export default VehicleService