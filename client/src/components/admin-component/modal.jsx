import * as React from 'react';
import { useState, useEffect } from 'react';
import {Box, Grid, useMediaQuery} from '@mui/material';
import { ChatState } from 'context/chatContext';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { IoIosCloseCircleOutline } from "react-icons/io";
import CircularProgress from '@mui/material/CircularProgress';
import { IoMdAdd } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";  //checked box
import { IoIosSquareOutline } from "react-icons/io"; // uncheck box
import SelectFetchedUser from 'components/check-box-list';


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 525,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};
const styleMobile = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 340,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: '.3rem'
};
const planMaintStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 525,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};
const planMaintStyleMobile = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 340,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: '.3rem'
};

const reportStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 525,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem',
    outline: 'none', 
};
const reportStyleMobile = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 340,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: '.3rem',
    outline: 'none', 
};

const styleVlog = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 525,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};

const styleVlogMobile = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 340,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: '.3rem'
};


export default function AddVehicleModal() {
    const [createVehicle, setCreateVehicle] = useState({brand:'', vehicle_name: "", fuel_type:"", vehicle_color:"", chasis_no:"", manufacture_year:"", vehicle_image:"", plate_no:"", current_mileage:"", engine_no:"", vehicle_type:"", transmission:"", })
    
    const [next, setNext] = useState(true)
    const [age, setAge] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setCreateVehicle({...createVehicle, [name]: value})
        console.log('vehicle', vehicle)
    }

    function handleNext() {setNext(false)}
    function handleBack() {setNext(true)}

    const handleAddVehicle = async()=>{
        console.log('adding')
    }
    
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem',  gap:'.5rem'}} >
                <FaCar size={'1.3rem'} />
                <Typography variant='h5'>New Vehicle</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={styleVlog}>

                    {next?  
                    <Grid>
                        <Box sx={{mt: 4}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Vehicle Brand</Typography>
                            <input className='input' name = {"brand"} value={createVehicle.brand} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Vehicle Name</Typography>
                            <input className='input' name = {"vehicle_name"} value={createVehicle.vehicle_name} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Body Color</Typography>
                            <input className='input' name = {"vehicle_color"} value={createVehicle.vehicle_color} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{width: '100%', mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Vehicle Type</Typography>
                            <FormControl sx={{ width: '100%'}} size="small">
                                <Select labelId="demo-select-small-label"  id="demo-select-small" value={createVehicle.vehicle_type} label="Age" onChange={handleChange} >
                                <MenuItem name={'vehicle_type'} value={"Car"}><Typography variant="h6">Car</Typography> </MenuItem>
                                <MenuItem name={'vehicle_type'} value={"Quarter Full"}><Typography variant="h6">Pickup Truck</Typography> </MenuItem>
                                <MenuItem name={'vehicle_type'} value={"Mid"}><Typography variant="h6">Bus</Typography> </MenuItem>
                                </Select>
                            </FormControl>
                        </Box> 

                        <Box sx={{width: '100%', mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Fuel Type</Typography>
                            <FormControl sx={{ width: '100%'}} size="small">
                                <Select labelId="demo-select-small-label"  id="demo-select-small" value={createVehicle.fuel_type} label="Age" onChange={handleChange} >
                                <MenuItem name={'fuel_type'} value={"pms"}><Typography variant="h6">PMS</Typography> </MenuItem>
                                <MenuItem name={'fuel_type'} value={"diesel"}><Typography variant="h6">Diesel</Typography> </MenuItem>
                                </Select>
                            </FormControl>
                        </Box> 

                        <Box sx={{width: '100%', mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Transmission Type</Typography>
                            <FormControl sx={{ width: '100%'}} size="small">
                                <Select labelId="demo-select-small-label"  id="demo-select-small" value={createVehicle.transmission} label="Age" onChange={handleChange} >
                                <MenuItem name={'transmission'} value={"manual"}><Typography variant="h6">Manual</Typography> </MenuItem>
                                <MenuItem name={'transmission'} value={"automatic"}><Typography variant="h6">Automatic</Typography> </MenuItem>
                                </Select>
                            </FormControl>
                        </Box> 

                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: 5, width: '100%',}}>
                            <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                                <Typography variant='h5'>Back</Typography>
                            </Box>
                            <Box className='mid-btn primary-btn' onClick={handleNext}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                                <Typography variant='h5'>Next</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    :
                    <Grid>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Plate No</Typography>
                            <input className='input' name = {"plate_no"} value={createVehicle.plate_no} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Engine No</Typography>
                            <input className='input' name = {"engine_no"} value={createVehicle.engine_no} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Chasis No</Typography>
                            <input className='input' name = {"chasis_no"} value={createVehicle.chasis_no} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>
                        
                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Vehicle Manufacture Year</Typography>
                            <input className='input' name = {"manufacture_year"} value={createVehicle.manufacture_year} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Current Mileage</Typography>
                            <input className='input' name = {"current_mileage"} value={createVehicle.current_mileage} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        <Box sx={{mt: 3}}>
                            <Typography variant='h5' sx={{mb: '.5rem'}}>Chasis No</Typography>
                            <input className='input' name = {"chasis_no"} value={createVehicle.chasis_no} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                        </Box>

                        

                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: 5, width: '100%',}}>
                        <Box className='mid-btn back-btn' onClick={handleBack}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                            <Typography variant='h5'>Back</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={handleAddVehicle}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                            <Typography variant='h5'>Add Vehicle</Typography>
                        </Box>
                    </Box>

                    </Grid>}
                    
                    
                </Box>
            </Modal>
        </div>
    );
}

export function AddDriverModal() {
    const [createLog, setCreateLog] = useState({startLocation: '', endLocation: '', startMileage: '', endMileage: '', route: '', fuelLevel: '' })

    const [age, setAge] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setAge(e.target.value)
        const name = e.target.name
        const value = e.target.value
        setCreateLog({...createLog, [name]: value})
    }

    const handleCreateLog = (e)=>{
        // e.preventDefault()
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem',  gap:'.5rem'}} >
                <IoPersonAddOutline size={'1.3rem'} />
                <Typography variant='h5'>Add Driver</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={styleVlog}>
                    <Box >
                        <Typography variant="h4" fontWeight={'500'}>New Vehicle Log</Typography>
                    </Box>
                    <Box sx={{mt: 4}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Starting Location</Typography>
                        <input className='input' name = {"startLocation"} value={createLog.startLocation} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Ending Location</Typography>
                        <input className='input' name = {"endLocation"} value={createLog.endLocation} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Starting Mileage</Typography>
                        <input className='input' name = {"startMileage"} value={createLog.startMileage} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Ending Mileage</Typography>
                        <input className='input' name = {"endMileage"} value={createLog.endMileage} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Route</Typography>
                        <input className='input' name = {"route"} value={createLog.route} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{width: '100%', mt: 4 }}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Current Fuel Level</Typography>
                        <FormControl sx={{ width: '100%'}} size="small">
                            <Select labelId="demo-select-small-label"  id="demo-select-small" value={createLog.fuelLevel} label="Age" onChange={handleChange} >
                                    <MenuItem name={'fuelLevel'} value={"Full"}><Typography variant="h6">Full</Typography> </MenuItem>
                                    <MenuItem name={'fuelLevel'} value={"Quarter Full"}><Typography variant="h6">Quarter Full</Typography> </MenuItem>
                                    <MenuItem name={'fuelLevel'} value={"Mid"}><Typography variant="h6">Mid</Typography> </MenuItem>
                                    <MenuItem name={'fuelLevel'} value={"Quarter Empty"}><Typography variant="h6">Quarter Empty</Typography> </MenuItem>
                                    <MenuItem name={'fuelLevel'} value={"Reserve"}><Typography variant="h6">Reserve</Typography> </MenuItem>
                            </Select>
                        </FormControl>
                    </Box> 
                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: 4, width: '100%',}}>
                        <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                            <Typography variant='h5'>Back</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={handleCreateLog}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                            <IoMdAdd size={'1.5rem'} />
                            <Typography variant='h5'>Create Log</Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

const FetchedUsers = ({key, data, checkIcon, setCheckIcon, setUserSelect, userSelect})=>{

    function handleUser(data){

        setUserSelect({...userSelect, value: `${data.lastName} ${data.firstName}` })

        if(checkIcon){
            setCheckIcon(false)
        }
        if (!checkIcon){
            setCheckIcon(true)
            setUserSelect({...userSelect, show: true})
        }
    }
    return(
        <Box onClick={()=>handleUser(data)} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: '2.5rem',p: '0 .5rem', gap: '1.5rem', background: 'white', width: '100%', mb: '.5rem', mr: '-.5rem', borderRadius: '.3rem', cursor: 'pointer'}}>
            {/* <Box sx={{height: '2.5rem', width: '2rem', display: 'flex', alignItems: 'center', }}>
                {checkIcon ? <IoIosCheckboxOutline size={'1.55rem'} /> : <IoIosSquareOutline size={'2rem'} />}
            </Box> */}
            <Typography variant='h4' fontWeight={'400'} sx={{mt: '.5rem', height: '2.5rem', display: 'flex', alignSelf: 'center'}}>{data.lastName} {data.firstName}</Typography>
        </Box>
    )
}

export function AssignVehicle() {
    const [userSelect, setUserSelect] = useState({value: '', show: false})
    const [next,setNext] = useState(true)
    const [checkIcon, setCheckIcon] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {setOpenAlert, setAlertMsg, setAlertSeverity} = ChatState()
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [modalStyle, setModalStyle] = useState(false)


    const resize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        if (!navigator.onLine){
            console.log('network error')
        }else{
            fetchUsers()
        }
        window.addEventListener('resize', resize)
        if (width <= 599 ){
            setModalStyle(true)
        }
        if (width > 599){
            setModalStyle(false)
        }
        return()=>{
            window.removeEventListener('resize', resize)
        }
    }, [width])

    const fetchUsers = async()=>{
        try {
            const users = await axios.get("https://futa-fleet-guard.onrender.com/api/user/users", {}, {
                headers: {
                    "Content-Type":  "Application/json",
                }
            });
            const userBox = users.data.users
            const filterUsers = userBox.filter(data => data.role !== 'driver')
            setAllUsers(filterUsers)
            setShow(true)
        } catch (err) {
            console.log(err)
            if (!navigator.onLine) {
                setAlertMsg("No internet connection"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            } else if (err.response) {
                // Handle server errors
                setAlertMsg(err.response.data.err || "An error occurred"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            } else {
                // Handle network errors
                setAlertMsg("An error occurred"); setAlertSeverity("warning"); setOpenAlert(true); setShow(false)
            }
        }
    }

    const handleChange = (e)=>{
        setAge(e.target.value)
        const name = e.target.name
        const value = e.target.value
        setCreateLog({...createLog, [name]: value})
    }

    const handleNext = (e)=>{
        setNext(false)}


    const handleSubmit = async()=>{
        setNext(true)
        handleClose()

    }

    const isMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <div style={{borderColor: '#FFFFF', outline: 'none', p: '.75rem' }}>
            {!isSM && <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem',  gap:'.5rem'}} >
                <Typography variant='h5'>Assign Vehicle</Typography> 
            </Box>}
            {isSM && <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '9rem',  gap:'.5rem'}} >
                <Typography variant='h5'>Assign Vehicle</Typography> 
            </Box>}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={modalStyle? styleVlogMobile : styleVlog}>

                    {next?
                    <Box sx={{height: 'auto', maxHeight: '87.5vh'  }}>
                        {!isSM && <Typography variant="h3" textAlign={'center'} fontWeight={'600'}>Vehicle Assignment</Typography>}
                        {isSM && <Typography variant="h4" textAlign={'center'} fontWeight={'500'}>Vehicle Assignment</Typography>}
                        {!isSM && <Typography variant="h4" mt={'1.25rem'} textAlign={'center'} fontWeight={'500'}>Select user to be assigned to the selected vehicle to</Typography>}
                        {isSM && <Typography variant="h5" mt={'1rem'} textAlign={'center'} fontWeight={'500'}>Select user to be assigned to the selected vehicle to</Typography>}
                        
                        {/* <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: '1rem'}}>
                            <Typography variant='h4' fontWeight='400'>Vehicle Name</Typography>
                            <Typography variant='h4' fontWeight='500'>Hyuandia Elentia</Typography>
                        </Box>
                        
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: '1rem'}}>
                            <Typography variant='h4' fontWeight='400'>Plate Number</Typography>
                            <Typography variant='h4' fontWeight='500'>KTU-09EL</Typography>
                        </Box> */}


                        <Box sx={{mt: '1rem', mb: '1rem'}}>
                            <input className='input' name = {"startLocation"} placeholder='Search for user.' value={''} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                            <Box className="mid-btn primary-btn" mt={'.75rem'}>
                                <Typography variant='h4' fontWeight={'400'} >Filter</Typography>
                            </Box>
                        </Box>

                        {userSelect.show &&
                            <>
                        {!isSM && <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', mt: '1rem', p: '0 1rem', border: '1px solid orangered', borderRadius: '.3rem', height: '2.5rem', mb: '.75rem'}}>
                            <Typography variant='h4' fontWeight='500'>Selected User</Typography>
                            <Typography variant='h4' fontWeight='500'>{userSelect.value}</Typography>
                        </Box>}
                        {isSM && <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', mt: '1rem', border: '1px solid orangered', borderRadius: '.3rem', height: '2.25rem', p: '0 .5rem', mb: '.75rem'}}>
                            <Typography variant='h5' fontWeight='500'>Selected User</Typography>
                            <Typography variant='h5' fontWeight='500'>{userSelect.value}</Typography>
                        </Box>}
                        </>}

                        <Box sx={{background: 'whitesmoke', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20rem', maxHeight: '23.5rem', overflow: 'auto',p: '5rem .25rem'}}>

                            {allUsers.map((data, ind)=>{
                                return(
                                        <SelectFetchedUser data={data} key={ind} />
                                )
                            })}
                        </Box> 

                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: '2rem', width: '100%',}}>
                            <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                                <Typography variant='h5'>Close</Typography>
                            </Box>
                            <Box className='mid-btn primary-btn' onClick={handleNext}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                                <Typography variant='h5'>Next</Typography>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <Box> 
                        <Typography variant='h4' fontWeight={'500'}> Vehicle Assignment</Typography>

                        <Box disabled={loading} className='mid-btn primary-btn' onClick={handleSubmit}  fullWidth  sx={{ height: '2.5rem',mt:'1.75rem', textTransform: 'none', position: 'relative'}}>
                        {loading && <CircularProgress  size={26} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: -12, marginLeft: -12, color: 'white' }} />}
                        {!loading ? <Typography variant='h5'>Proceed</Typography> : ''}
                    </Box>
                    </Box>
                    }
                </Box>
            </Modal>
        </div>
    );
}
