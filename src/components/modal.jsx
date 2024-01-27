import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import "../index.css"



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

export default function WorkModal() {
    const [planMaint, setPlanMaint] = useState({conserns: '', services: '', date: ''})
    const [age, setAge] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setAge(e.target.value)
        
    }
    return (
        <div>
            <Box className='btn-1' onClick={handleOpen} sx={{width: '12rem', pl: 2, }} >
                <Typography variant='h5'>Plan Maintenance</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={style}>
                    <Box >
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100%', height: '2.5rem',}}> <Avatar>X</Avatar> </Box>
                        <Typography variant="h4" fontWeight={'500'}>Plan Maintenance</Typography>
                    </Box>
                    <Box sx={{width: '100%', mt: 4 }}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Services</Typography>
                        <FormControl sx={{ width: '100%'}} size="small">
                            <Select labelId="demo-select-small-label"  id="demo-select-small" value={age} label="Age" onChange={handleChange} >
                                <MenuItem value="">
                                </MenuItem>
                                    <MenuItem value={"Oil Change"}><Typography variant="h6">Oil Change</Typography> </MenuItem>
                                    <MenuItem value={"Type Change"}><Typography variant="h6">{"Type Change"}</Typography> </MenuItem>
                                    <MenuItem value={"Brake Inspection"}><Typography variant="h6">{"Brake Inspection"}</Typography> </MenuItem>
                                    <MenuItem value={"Suspension Inspection"}><Typography variant="h6">{"Suspension Inspection"}</Typography> </MenuItem>
                                    <MenuItem value={"Engine Inspection"}><Typography variant="h6">{"Engine Inspection"}</Typography> </MenuItem>
                            </Select>
                        </FormControl>

                        
                    </Box> 
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Concerns</Typography>
                        <input className='input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Date</Typography>
                        <input className='input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="date" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box className='btn-2'  sx={{ mt: 4, height: '2.5rem', color: 'white', }}>
                        <Typography variant='h5'>Submits</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export function CreateLogModal() {
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
        e.preventDefaults()
        console.log(createLog)
    }
    return (
        <div>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem', }} >
                <Typography variant='h5'>Create Log</Typography> 
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
                            <Typography variant='h5'>Create Log</Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

