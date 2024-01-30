import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import LoginForm from 'components/loginForm'
import SmallInputBar, { MidInputBar, SemiBigInputBar } from 'components/input-bars';
import axios from 'axios';


const Login = () => {
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const navigate  = useNavigate()

    const {mode, setMode} = ChatState()
        const [width, setWidth] = useState(window.innerWidth)
    const theme = useTheme();

    const resize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize)
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])
    const isNonMobileScreens = useMediaQuery("(min-width: 925px)");
    const MobileScreens = useMediaQuery("(min-width: 780px)");


    const handleSubmit = async(e)=>{
        e.preventDefault()
        if (!email || !password) {
            console.log('field cannot be empty')
        }
        console.log("email : ", email, "password: ", password)
        try {
            const auth = await axios.post("http://localhost:5500/api/auth/login", {email, password}, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            console.log(auth.data);
            localStorage.setItem('token', auth.data.token)
            setPersistData({...persistData, user: auth.data, isAuth: true}) 
            setUser(auth.data)
            sessionStorage.setItem("persistData", persistData)
            navigate('/home')
        } catch (err) {
            console.log("Incorrect credentials")
        }
    }
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setCredentials({...credentials, [name]: value})
    }
    
    return (
        <Grid container component="main" sx={{ height: '100vh', p:'.5rem', backgroundColor: "white",}}>
            <Grid item xs={0} sm={5} md={5} sx={{backgroundImage: 'url(https://futa-mechanic.netlify.app/img/auth-bg.88fd8dc0.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem'
            }}
            />
            <Grid item xs={12} sm={7} md={7} sx={{background: theme.palette.background.alt, display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 , maxWidth: '550px'}}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Welcome Back</Typography>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}> <LockOutlinedIcon /> </Avatar>
                    <Typography component="h5" variant="h4"> Sign in </Typography>
                </Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 .5rem',width: '100%', maxWidth: '550px',  }}>
                    <Box>
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Username</Typography>
                        <input className='input  search-input' name = {"username"} value={credentials.username} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Password</Typography>
                        <input className='input  search-input' name = {"password"} value={credentials.password} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box className='mid-btn primary-btn' onClick={()=> navigate('/dashboard')} type="submit" fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none'}}>
                        <Typography variant='h5'>Login</Typography>
                    </Box>
                </Box>
                <Grid container sx={{p: '2rem .5rem', maxWidth: '550px', gap: '.75rem'}}>
                    <Grid item xs>
                        <Box onClick={()=> navigate('/recover-password') } sx={{cursor: 'pointer', display: 'flex', justifyContent: 'flex-start' , alignItems: 'center'}}>
                            <Typography variant='h7' color= 'cornflowerblue' sx={{textTransform: 'none'}}>Forgot password?</Typography> 
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box onClick={()=> navigate('/signup')} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} >
                            <Typography variant='h7' color='cornflowerblue' sx={{textTransform: 'none'}}>{"Don't have an account? Sign Up"}</Typography> 
                        </Box>
                    </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}

            </Grid>
        </Grid>
    );
}



export default Login