import * as React from 'react';
import { useState, useEffect } from 'react';
import {Box, Grid} from '@mui/material';
import { ChatState } from 'context/chatContext';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AlertMessage from '../../components/snackbar'
import four from '../../asset/five.png'
import { FaCaretDown } from "react-icons/fa"
import { FaCaretUp } from "react-icons/fa"
import { IoSquareOutline } from "react-icons/io5"
import { FaRegSquareCheck } from "react-icons/fa6";
import { FormGroup } from '@mui/material';
import { RiCloseCircleLine } from "react-icons/ri";
import { GoStarFill, GoStar } from "react-icons/go";
import MenuItem from '@mui/material/MenuItem';
import { IoIosCloseCircleOutline } from "react-icons/io";
import CircularProgress from '@mui/material/CircularProgress';
import { IoMdAdd } from "react-icons/io";


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};
const planMaintStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};
const reportStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '.3rem'
};
const styleVlog = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
                <IoMdAdd size={'1.3rem'} />
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
                <IoMdAdd size={'1.3rem'} />
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
