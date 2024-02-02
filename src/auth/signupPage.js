import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MaintPersonnel, { Assigee, DriverCard } from 'components/role-card';
import { AiOutlineRollback } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import david from "../asset/david.jpg"
import auth1 from '../asset/auth1.png'
import auth2 from '../asset/auth2.png'


const Signup = () => {
    const [credentials, setCredentials] = useState({role: "", firstName: '', lastName: '', email: '', phone: '',password: ''})
    const [level, setLevel] = useState(true)
    const {userRole, setUserRole} = ChatState()
    const navigate = useNavigate()
    
    const [width, setWidth] = useState(window.innerWidth)
    const theme = useTheme();
    
    const resize = ()=>{
        setWidth(window.innerWidth)
    }
    
    useEffect(() => {
        // window.addEventListener('resize', resize)
        // return()=>{
        //     window.removeEventListener('resize', resize)
        // }
        setCredentials({...credentials, "role": userRole.value})
    }, [width, userRole])
    const isNonMobileScreens = useMediaQuery("(min-width: 925px)");
    const MobileScreens = useMediaQuery("(min-width: 780px)");

    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(credentials)
        setCredentials({role: "", firstName: '', lastName: '', email: '', phone: '',password: ''})
        setTimeout(() => {
            navigate('/')
        }, 1000);
        // if (!email || !password) {
        //     console.log('field cannot be empty')
        // }
        // console.log("email : ", email, "password: ", password)
        // try {
        //     const auth = await axios.post("http://localhost:5500/api/auth/login", {email, password}, {
        //         headers: {
        //             "Content-type": "Application/json"
        //         }
        //     })
        //     console.log(auth.data);
        //     localStorage.setItem('token', auth.data.token)
        //     setPersistData({...persistData, user: auth.data, isAuth: true}) 
        //     setUser(auth.data)
        //     sessionStorage.setItem("persistData", persistData)
        //     navigate('/home')
        // } catch (err) {
        //     console.log("Incorrect credentials")
        // }
    }
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setCredentials({...credentials, [name]: value})
    }
    
    return (
        <Grid container component="main"  sx={{ height: '100vh', p:'.5rem', overflowY: 'auto',}}>
        
            {userRole.boo ?
            <Grid item xs={0} sm={5} md={4} sx={{backgroundImage: `url(${auth2})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
            p: '2.5rem'
            }}> 
                <Typography variant={'h2'} fontWeight={'400'} color={'white'}>FleetPro</Typography>
                
            </Grid>
            :
            <Grid item xs={0} sm={5} md={5} sx={{backgroundImage: `url(${auth1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
            p: '2.5rem'

            }}>
                <Box>
                <Typography variant={'h2'} fontWeight={'400'} color={'white'}>FleetPro</Typography>
                    <Box sx={{width: '100%', mt: '4rem'}}>
                        <Typography variant={'h2'} fontWeight={'600'} color={'white'}> Are you wanting to stay connected with your vehicle ?</Typography>
                        <Typography mt={'1rem'} variant={'h6'} fontWeight={'500'} color={'white'}>Start managing your maintenance needs with our user-friendly app.  </Typography>
                    </Box>
                </Box>

                <Box sx={{width: '100%',p: '.75rem', border: '1px solid white', borderRadius: '.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', background: '#D1DFFA'}}>
                    <Typography variant={'h6'} fontWeight={'500'} color={'#1B61E4'}>I find it very easy to monitor and get all maintenance issues relating to my vehicle sorted without having to stress myself.</Typography>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '.5rem'}}>
                        <Box sx={{
                        backgroundImage: `url(${david})`,
                        backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',
                        height: '3rem', width: '3rem', borderRadius: '50%',p: '0.25rem', backgroundColor: '#1B61E4'
                        }}></Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Typography variant={'h5'} fontWeight={'500'} color={'#1B61E4'}>Prof Dahunsi</Typography>
                        <Typography variant={'h6'} fontWeight={'500'} color={'#1B61E4'}>Director of CESRA </Typography>
                    </Box>
                    </Box>
                    
                </Box>

            </Grid>
            }
            {userRole.boo 
            ?
            <Grid item xs={12} sm={7} md={8} sx={{background: theme.palette.background.alt, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography component={"h2"} variant='h2' color={'cornflowerblue'} sx={{fontWeight: '500', mb: 1}}>What are you registering as?</Typography>
                    <Typography component="h5" variant="h4" color= {'black'}> In order to preceed, you need to select your role. </Typography> 
                    <Box sx={{mt: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))', gap: '1.5rem',}}>
                        <MaintPersonnel onClick={()=> console.log("hello")}  />
                        <Assigee  onClick={()=> console.log("assignee")} />
                        <DriverCard onClick={()=> console.log("driver")}  />
                    </Box>
                </Box>
            </Grid>
            :
            <Grid item xs={12} sm={7} md={7} sx={{background: theme.palette.background.alt, overflowY: 'auto',p: '.5rem 0',}}> 
                <Box sx={{ my:1, mx: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '500'}}>Create Account</Typography>
                    <Box sx={{cursor: 'pointer'}} onClick={()=> navigate('/login')} >
                        <Typography variant='h7' color='cornflowerblue' sx={{textTransform: 'none'}}>Already have an account, Login</Typography> 
                    </Box>
                </Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '550px'}} >
                        <Typography  variant='h5' sx={{mb: '.45rem'}}>First Name</Typography>
                        <input className='input  search-input' name = {"firstName"} value={credentials.firstName} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '550px'}} >
                        <Typography  variant='h5' sx={{mb: '.45rem'}}>Last Name</Typography>
                        <input className='input  search-input' name = {"lastName"} value={credentials.lastName} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '550px'}} >
                        <Typography  variant='h5' sx={{mb: '.45rem'}}> Email</Typography>
                        <input className='input  search-input' name = {"email"} value={credentials.email} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '550px'}} >
                        <Typography  variant='h5' sx={{mb: '.45rem'}}>Staff Id</Typography>
                        <input className='input  search-input' name = {"staffId"} value={credentials.staffId} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '550px'}} >
                        <Typography  variant='h5' sx={{mb: '.45rem'}}>Phone</Typography>
                        <input className='input  search-input' name = {"phone"} value={credentials.phone} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{width: '100%', maxWidth: '550px'}}>
                        <Typography variant='h5' sx={{mb: '.45rem', }}>Password</Typography>
                        <input className='input  search-input' name = {"password"} value={credentials.password} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    
                    <Box sx={{mt: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', width: '100%',maxWidth: '550px', gap: 4, pr: 0,}}>
                        
                        <Box className='mid-btn back-btn'  onClick={()=> setUserRole({...userRole, "boo":true})} sx={{height: '2.8rem',  textTransform: 'none',}}>
                            <AiOutlineRollback size={'1.5rem'} />
                            <Typography variant='h5' pl={'.5rem'} >Select Role</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={()=> navigate('/dashboard')} type="submit"  sx={{height: '2.8rem',  textTransform: 'none', color: 'white', background: 'cornflowerblue'}}>
                            <Typography variant='h5' pr={'.5rem'} >Create Account</Typography>
                            <MdOutlineNavigateNext size={'1.7rem'} />
                        </Box>                        
                    </Box>
                </Box>
            </Grid>
            }
        </Grid>
    );
}



export default Signup