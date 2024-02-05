import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { ChatState } from 'context/chatContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AiOutlineRollback } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import CircularProgress from '@mui/material/CircularProgress';
import auth1 from '../asset/auth1.png'
import david from '../asset/david.jpg'
import AlertMessage from 'components/snackbar';

const RecoverPassword = () => {
    const [credentials, setCredentials] = useState({username: "", password: "", password02: "", code: ''})
    const [card, setCard] = useState(true)
    const [butt, setButt] = useState(true)
    const [loading, setLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const navigate = useNavigate()
    const { setAlertMsg, setOpenAlert,  setAlertSeverity} = ChatState()


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


    const checkConnectivity = () => {
    setIsOnline(navigator.onLine);
    };
        setInterval(() => {
        checkConnectivity()
    }, 1000);

    const handlePasswordChange = async()=>{
        try {
            const email = credentials.username
            const password = credentials.password
            const auth = await axios.patch("https://futa-fleet-guard.onrender.com/api/auth/recover-password", {email, password}, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            setAlertMsg(auth.data.msg); setAlertSeverity('success'); setOpenAlert(true);
            setLoading(false)
            setCredentials({...credentials, username:""})
            setCard(false)
            setButt(false)
            setCredentials({...credentials, code: "", password: "", password02: '', username: ''})
            navigate('/login')
            
            } catch (err) {
                console.log(err)
                // will check for internet
                if(!isOnline){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                }else{
                setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                setLoading(false)
                }
            }

    }

    const handleSubmit = async(e)=>{
        if (!credentials.code){ setAlertMsg("Please provide you unique code."); setAlertSeverity('warning'); setOpenAlert(true);}
        if (!credentials.password || !credentials.password02){
            setAlertMsg("Please provide a new password "); setAlertSeverity('warning'); setOpenAlert(true);
        }
        if (credentials.password !== credentials.password02){
            setAlertMsg("Passwords do not match, check passwords and try again!!!"); setAlertSeverity('warning'); setOpenAlert(true);
        }
        else{
        setLoading(true)
        try {
            const code = credentials.code
            const email = credentials.username
            const auth = await axios.post("https://futa-fleet-guard.onrender.com/api/auth/recovery-code-verify", {email, code}, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            handlePasswordChange()
            // setLoading(false)
        } catch (err) {
            console.log(err.response.data.err)
                // will check for internet
                if(!navigator.onLine){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                }else{
                setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                setLoading(false)
                setCredentials({...credentials, password: "", password02})
                }
        }
        
    }
    }
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setCredentials({...credentials, [name]: value})
    }

    const handleNext = async()=>{
        if(!credentials.username){
            console.log(credentials)
            setAlertMsg("Please provide a correct email address!!!"); setAlertSeverity('warning'); setOpenAlert(true);
        }else{
            const email = credentials.username
            setLoading(true);
            try {
            const auth = await axios.post("https://futa-fleet-guard.onrender.com/api/auth/password-recovery-code", {email}, {
                headers: {
                    "Content-type": "Application/json"
                }
            })
            setAlertMsg(auth.data.msg); setAlertSeverity('success'); setOpenAlert(true);
            setLoading(false)
            setCard(false)
            setButt(false)
            setCredentials({...credentials, code: auth.data.info.uniqueCode})
            
            } catch (err) {
                console.log(err)
                // will check for internet
                if(!isOnline){
                    setAlertMsg(err.message); setAlertSeverity('warning'); setOpenAlert(true);
                    setLoading(false)
                }else{
                setAlertMsg(err.response.data.err); setAlertSeverity('warning'); setOpenAlert(true);
                setLoading(false)
                }
            }
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
            <Grid item xs={0} sm={5} md={5} sx={{backgroundImage: `url(${auth1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1.5rem',
            p: '2.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
            maxWidth: '200px'

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
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 , maxWidth: '570px', width: '100%' }}>
                    <Typography component={"h2"} variant='h2' color={'black'} sx={{fontWeight: '600'}}>Recover Password</Typography>
                    <Avatar sx={{ m: 1, background: '#FF571A' }}> <LockOutlinedIcon /> </Avatar>
                    {card ? 
                    <Typography component="h5" variant="h4"> Password reset </Typography> 
                    :
                    <Typography component="h5" variant="h4" color='cornflowerblue'> A unique code has been sent to your email address... </Typography>}
                </Box>
                <Box component="" noValidate onSubmit={handleSubmit} sx={{ mt: 1, p:'0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    {card ?
                    <Box  sx={{maxWidth: '570px', width: '100%'}}>
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Email / StaffId</Typography>
                        <input className='input  search-input' name = {"username"} value={credentials.username} onChange={(e)=> handleChange(e) }type="text" style={{width: '100%', height:'3rem', background: "white", color: 'black', border: '1px solid gray',}}/>
                    </Box>
                        :
                    <Box sx={{mt: '-2rem', maxWidth: '570px', width: '100%'}} >
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
                    <Box sx={{width: '100%', maxWidth: '570px'}}>
                        <Box disabled={loading} type="submit" className='mid-btn primary-btn' onClick={handleNext}  fullWidth  sx={{ mt: 4, height: '3rem', textTransform: 'none', position: 'relative'}}>
                            {loading && <CircularProgress  size={26} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: -12, marginLeft: -12, color: 'white' }} />}
                            {!loading ? <Typography variant='h5'>Next</Typography> : ''}
                        </Box>
                        
                    </Box>
                    :
                    <Box sx={{mt: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', width: '100%', gap: 4, pr: 0, maxWidth: '570px'}}>
                        <Box className='mid-btn back-btn'  onClick={handleBack} sx={{height: '2.8rem',  textTransform: 'none',}}>
                            <AiOutlineRollback size={'1.5rem'} />
                            <Typography variant='h5' pl={'.5rem'} >Back</Typography>
                        </Box>

                        <Box disabled={loading} type="submit" className='mid-btn primary-btn' onClick={handleSubmit}  fullWidth  sx={{  height: '2.8rem', textTransform: 'none', position: 'relative'}}>
                            {loading && <CircularProgress  size={26} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: -12, marginLeft: -12, color: 'white' }} />}
                            {!loading ? <> <Typography variant='h5'>Reset Password</Typography> 
                            <MdOutlineNavigateNext size={'1.6rem'} />
                            </>: ''}
                        </Box>

                        
                    </Box>

                    }
                </Box>
                <Grid container sx={{p: '2rem 0', maxWidth: '570px'}}>
                    <Grid item xs>
                        <Box onClick={()=> navigate('/login')} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Typography variant='h7' color= 'cornflowerblue' sx={{textTransform: 'none'}}>Already have an account? Login.</Typography> 
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box onClick={()=> navigate('/signup')} sx={{cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Typography variant='h7' color='cornflowerblue' sx={{textTransform: 'none'}}>Dont have an account, Sign up.</Typography> 
                        </Box>
                    </Grid>
                </Grid>
                
            </Grid>
            <AlertMessage />
        </Grid>
    );
}



export default RecoverPassword