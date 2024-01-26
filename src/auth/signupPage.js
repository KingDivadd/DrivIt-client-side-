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
        <Grid container component="main" sx={{ height: '100vh', p:'.5rem', overflowY: 'auto'}}>
        
            {userRole.boo ?
            <Grid item xs={0} sm={5} md={4} sx={{backgroundImage: 'url(https://futa-mechanic.netlify.app/img/register-as-bg.4abc4436.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0'
            }} />
            :
            <Grid item xs={0} sm={5} md={5} sx={{backgroundImage: 'url(https://futa-mechanic.netlify.app/img/register-as-bg.4abc4436.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0'
            }} />
            }
            {userRole.boo 
            ?
            <Grid item xs={12} sm={7} md={8} sx={{background: theme.palette.background.alt, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
            <Grid item xs={12} sm={7} md={7} sx={{background: theme.palette.background.alt, overflowY: 'auto',p: '.5rem 0'}}> 
                <Box sx={{ my:1, mx: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '500'}}>Create Account</Typography>
                    <Link href="/login" variant="body2">
                        <Typography variant='h7' color='cornflowerblue' sx={{textTransform: 'none'}}>Already have an account, Login</Typography> 
                    </Link>
                </Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '500px'}} >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>First Name</Typography>
                        <input className='input  search-input' name = {"firstName"} value={credentials.firstName} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '500px'}} >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Last Name</Typography>
                        <input className='input  search-input' name = {"lastName"} value={credentials.lastName} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '500px'}} >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}> Email</Typography>
                        <input className='input  search-input' name = {"email"} value={credentials.email} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '500px'}} >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Staff Id</Typography>
                        <input className='input  search-input' name = {"staffId"} value={credentials.staffId} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mb: 3, width: '100%', maxWidth: '500px'}} >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Phone</Typography>
                        <input className='input  search-input' name = {"phone"} value={credentials.phone} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{width: '100%', maxWidth: '500px'}}>
                        <Typography variant='h5' sx={{mb: '.5rem', }}>Password</Typography>
                        <input className='input  search-input' name = {"password"} value={credentials.password} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.8rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    
                    <Box sx={{mt: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', width: '100%',maxWidth: '500px', gap: 4, pr: 0}}>
                        
                        <Button className='smButton'  onClick={()=> setUserRole({...userRole, "boo":true})} sx={{height: '2.8rem',  textTransform: 'none', color: 'white', background: 'orange'}}>
                            <Typography variant='h5'>Select Role</Typography>
                        </Button>
                        <Button className='smButton' type="submit"  sx={{height: '2.8rem',  textTransform: 'none', color: 'white', background: 'cornflowerblue'}}>
                            <Typography variant='h5'>Create Account</Typography>
                        </Button>

                        
                    </Box>
                </Box>
                
            </Grid>
            }
        </Grid>
    );
}



export default Signup