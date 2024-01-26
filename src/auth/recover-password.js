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


const RecoverPassword = () => {
    const [credentials, setCredentials] = useState({username: "", password: "", password02: "", code: ''})
    const [card, setCard] = useState(true)
    const [butt, setButt] = useState(true)


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

    const handleNext = ()=>{
        if (card){
            setCard(false)
            setButt(false)
        }
    }
    const handleBack = ()=>{
        if (!card){
            setCard(true)
            setButt(true)
        }
    }
    
    const handleResetPassword = async(e)=>{
        e.preventDefaults()
    }

    return (
        <Grid container component="main" sx={{ height: '100vh', p:'.5rem', backgroundColor: "white",}}>
            <Grid item xs={0} sm={5} md={6} sx={{backgroundImage: 'url(https://futa-mechanic.netlify.app/img/auth-bg.88fd8dc0.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem'
            }}
            />
            <Grid item xs={12} sm={7} md={6} sx={{background: theme.palette.background.alt}}> 
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Recover Password</Typography>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}> <LockOutlinedIcon /> </Avatar>
                    {card ? 
                    <Typography component="h5" variant="h4"> Password reset </Typography> 
                    :
                    <Typography component="h5" variant="h4" color='cornflowerblue'> A unique code has been sent to your email address... </Typography>}
                </Box>
                <Box component="" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 3rem' }}>
                    {card ?
                    <Box >
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Email / StaffId</Typography>
                        <input className='input  search-input' name = {"username"} value={credentials.username} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                        :
                    <Box sx={{mt: '-2rem'}} >
                        <Box sx={{mb: 2}}>
                            <Typography  variant='h5' sx={{mb: '.5rem'}}>Provide unique code</Typography>
                            <input className='input  search-input' name = {"code"} value={credentials.code} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography  variant='h5' sx={{mb: '.5rem'}}>Create new Password</Typography>
                            <input className='input  search-input' name = {"password"} value={credentials.password} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography  variant='h5' sx={{mb: '.5rem'}}>Re-enter Password</Typography>
                            <input className='input  search-input' name = {"password02"} value={credentials.password02} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                        </Box>
                        
                    </Box>}

                    {butt ? 
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '4rem'}}>
                        <Button className='smButton'  onClick={()=> handleBack()} fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none', color: 'white', background: "orange",  }}>
                            <Typography variant='h5'>Back</Typography>
                        </Button>
                        <Button className='smButton' onClick={()=> handleNext()} fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none', color: 'white', background: "cornflowerblue",  }}>
                            <Typography variant='h5'>Next</Typography>
                        </Button>
                    </Box>
                    :
                    <Button className='smButton' type= "submit" onClick={(e)=>handleResetPassword(e)} fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none', color: 'white', background: "cornflowerblue",  }}>
                            <Typography variant='h5'>Reset Password</Typography>
                    </Button>
                    }
                </Box>
                <Grid container sx={{p: '3rem'}}>
                    <Grid item xs>
                        <Link href="/login" variant="body2">
                            <Typography variant='h7' color= 'cornflowerblue' sx={{textTransform: 'none'}}>Already have an account? Login.</Typography> 
                        </Link>
                    </Grid>
                    <Grid item>
                    <Link href="/signup" variant="body2">
                        <Typography variant='h7' color='cornflowerblue' sx={{textTransform: 'none'}}>Dont have an account, Sign up.</Typography> 
                    </Link>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    );
}



export default RecoverPassword