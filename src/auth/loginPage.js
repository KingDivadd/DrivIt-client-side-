import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import david from '../asset/david.jpg'
import AlertMessage from '../components/snackbar'
import auth1 from '../asset/auth1.png'

const Login = () => {
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(false)
    const [show, setShow] = useState(false)
    const [nam, setNam] = useState([])
    const navigate  = useNavigate()

    const {alertMsg, setAlertMsg, openAlert, setOpenAlert, alertSeverity, setAlertSeverity} = ChatState() //serverity: 'warning', msg: 'Field cannot be empty', openAlert: true
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

    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!credentials.password || !credentials.username){
            setOpenAlert(true); setAlertMsg("Fields cannot be empty!!!"); setAlertSeverity('warning')
        }

        // here, the loading wont work on setTimeout, but rather when the request has been received.
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // setNam([])
        }, 3000);


        
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
    
    
    return (
        <Grid container component="main" sx={{ height: '100vh', p:'.5rem', backgroundColor: "white",}}>
            
            <Grid item  spacing={'3rem'} xs={0} sm={5} md={5} sx={{backgroundImage: `url(${auth1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            p: '2.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'
            }}
            >  
                <Box>
                <Typography variant={'h2'} fontWeight={'400'} color={'white'}>FleetPro</Typography>
                    <Box sx={{width: '100%', mt: '4rem'}}>
                        <Typography variant={'h2'} fontWeight={'600'} color={'white'}>Get ready to revolutionizes how you track, schedule, and log</Typography>
                        <Typography mt={'1rem'} variant={'h6'} fontWeight={'500'} color={'white'}>Start managing your maintenance needs with our user-friendly app. </Typography>
                    </Box>
                </Box>

                <Box sx={{width: '100%',p: '.75rem', border: '1px solid white', borderRadius: '.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', background: '#D1DFFA'}}>
                    <Typography variant={'h6'} fontWeight={'500'} color={'#1B61E4'}>Start managing your maintenance needs with our user-friendly app. </Typography>
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

            <Grid item xs={12} sm={7} md={7} sx={{background: theme.palette.background.alt, display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 , maxWidth: '550px'}}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Welcome Back</Typography>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}> <LockOutlinedIcon /> </Avatar>
                    <Typography component="h5" variant="h4"> Sign in </Typography>
                </Box>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 .5rem',width: '100%', maxWidth: '550px',  }}>
                    <Box>
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Username</Typography>
                        <input className={(inputError && nam.includes("username"))?'input-error input': 'input'} name = {"username"} value={credentials.username} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Password</Typography>
                        <input className={(inputError && nam.includes("passsword"))?'input-error input': 'input'} name = {"password"} value={credentials.password} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box disabled={loading} type="submit" className='mid-btn primary-btn' onClick={handleSubmit}  fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none', position: 'relative'}}>
                        {loading && <CircularProgress  size={26} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: -12, marginLeft: -12, color: 'white' }} />}
                        {!loading ? <Typography variant='h5'>Login</Typography> : ''}
                    </Box>
                    <AlertMessage />

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