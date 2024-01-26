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
                        <input className='input  search-input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Date</Typography>
                        <input className='input  search-input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="date" style={{width: '100%', height:'2.5rem', background: "white", color: 'black', border: '1px solid gray'}}/>
                    </Box>
                    <Box className='btn-2'  sx={{ mt: 4, height: '2.5rem', color: 'white', }}>
                        <Typography variant='h5'>Submits</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}