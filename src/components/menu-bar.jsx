import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { PersonOutlineOutlined, NotificationsActiveOutlined, LensBlurOutlined, ListAltOutlined} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { IoClose, IoSearch } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CreateLogModal, ReportModal} from 'components/modal';
import SideBar from 'components/side-bar';
import { TbSortAscending, TbSortDescending, TbList } from "react-icons/tb";

const MenuBar = ()=>{
    const [currentTime, setCurrentTime] = useState(new Date())
    const [menuIcon, setMenuIcon] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const {menu, setMenu} = ChatState()

    const resize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
        localStorage.setItem('menu',menu)
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
    }, [width, menu])

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleMenu = ()=>{
        if (menu){
            setMenu(false)
        }
        if (!menu){
            setMenu(true)
        }
    }
    return (
            <Box sx={{background: 'white',height: '3rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '0 .5rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',height: '100%', gap: '.75rem'}}>
                    {menu ? 
                    <Box sx={{height: '100', display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={handleMenu} >
                        {menuIcon && <IoClose size={'2rem'}  /> }
                        <IoSearch size={'2rem'} />
                    </Box> :
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={handleMenu} >
                        {menuIcon && <TbList size={'2rem'} /> }
                    </Box>}
                    <Box sx={{width: '7rem', height: '100%', display: 'grid', placeItems: 'center'}}>
                        <Typography variant={'h4'} fontWeight={'500'}>{formatDate(currentTime)}</Typography>
                    </Box>
                    <Box sx={{width: '7rem', height: '100%', display: 'grid', placeItems: 'center'}}>
                        <Typography variant={'h4'} fontWeight={'500'}>{currentTime.toLocaleTimeString()}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Avatar sizes='2rem' sx={{ m: 1, bgcolor: 'primary.light', color: 'cornflowerblue' }}> <NotificationsActiveOutlined /> </Avatar>
                    </Box>
                    <Box>
                        <Avatar sx={{ m: 1, bgcolor: 'warning.main', color: 'cornflowerblue' }}> <PersonOutlineOutlined  sx={{color: 'cornflowerblue'}} /> </Avatar>
                    </Box>
                </Box>
            </Box>
    )
}

export default MenuBar