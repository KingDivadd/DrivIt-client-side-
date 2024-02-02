import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { ChatState } from 'context/chatContext';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../index.css"
import four from '../asset/one.jpg';
import { FaCaretDown } from "react-icons/fa"
import { FaCaretUp } from "react-icons/fa"
import { IoSquareOutline } from "react-icons/io5"
import { FaRegSquareCheck } from "react-icons/fa6";
import { FormGroup } from '@mui/material';
import { RiCloseCircleLine } from "react-icons/ri";
import { GoStarFill, GoStar } from "react-icons/go";
import MenuItem from '@mui/material/MenuItem';
import { IoIosCloseCircleOutline } from "react-icons/io";

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

export default function WorkModal() {
    const [planMaint, setPlanMaint] = useState({conserns: '', services: '', date: ''})
    const [age, setAge] = useState("")
    const [open, setOpen] = React.useState(false);
    const [statusIcon, setStatusIcon] = useState(true)
    const [activeService, setActiveService] = useState(true)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setAge(e.target.value)
        
    }
    const handleSubmit = ()=>{
    }
    const handleService = ()=>{
        if (statusIcon){
            setStatusIcon(false)
        }
        if(!statusIcon){
            setStatusIcon(true)
        }
    }
    const handleActiveService = (den)=>{
        if (activeService) {
            setActiveService(false)
        }
        if (!activeService){
            setActiveService(true)
        }
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '12rem' }} >
                <Typography variant='h5'>Plan Maintenance</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={planMaintStyle}>
                    <Box >
                        <Typography variant="h4" fontWeight={'500'}>Plan Maintenance</Typography>
                    </Box>
                    <Box sx={{width: '100%', mt: 4 }}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Services</Typography>
                        <Box sx={{borderRadius: '.3rem', border: '1px solid red', width: '100%', height: '7rem',   mb: '.75rem', height: '7rem', overFlowY: 'hidden'}}>

                            <Box sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))', gap: '.5rem',padding: '.25rem', background: 'orange', overflowY:'auto'}}>                                
                                <Box sx={{borderRadius: '.3rem', border: '1px solid gray', height: '1.75rem', width: 'fit-content', p: '0 .75rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', mr: '.5rem', cursor: 'pointer', }}><RiCloseCircleLine color='gray' size={'1.15rem' } /> </Box>         
                                    <Typography variant='h6' fontWeight={'500'} >Check Oil</Typography>
                                </Box>
                                <Box sx={{borderRadius: '.3rem', border: '1px solid gray', height: '1.75rem', width: 'fit-content', p: '0 .75rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', mr: '.5rem', cursor: 'pointer', }}><RiCloseCircleLine color='gray' size={'1.15rem' } /> </Box>         
                                    <Typography variant='h6' fontWeight={'500'} >Check Oil</Typography>
                                </Box>
                                <Box sx={{borderRadius: '.3rem', border: '1px solid gray', height: '1.75rem', width: 'fit-content', p: '0 .75rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', mr: '.5rem', cursor: 'pointer', }}><RiCloseCircleLine color='gray' size={'1.15rem' } /> </Box>         
                                    <Typography variant='h6' fontWeight={'500'} >Check Oil</Typography>
                                </Box>
                            </Box>    
                        </Box>

                        <Box onClick={handleService } sx={{cursor: 'pointer',width: '100%', height: '2.5rem',display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid gray', borderRadius: '.3rem', p: '0 .5rem'}}>
                            <Typography variant='h5' fontWeight={'500'}>{"Select ..."}</Typography>
                            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{statusIcon ?<FaCaretDown /> : <FaCaretUp />} </Box>
                        </Box>
                        {statusIcon && 
                        <Box sx={{ positon: 'absolute', top: '0', left: '0', background: 'red', mt: '.5rem', height: 'auto', }}>
                            <Box onClick={()=>handleActiveService("Check Oil")} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '.5rem', p: '0 .5rem', height: '2.5rem', borderRadius: '.3rem', background: 'cyan'}}>
                                <Box sx={{display: 'flex', alignItems: 'center', height: '100%'}}>{activeService ? <IoSquareOutline size={'1.5rem'} /> : <FaRegSquareCheck size={'1.5rem'} />} </Box>
                                <Typography variant={'h5'} fontWeight={'500'}>Check Oil</Typography>
                            </Box>
                        </Box>
                        }
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Concerns</Typography>
                        <input className='input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Date</Typography>
                        <input className='input' name = {"concern"} value={planMaint.concern} onChange={(e)=> handleChange(e) } type="date" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>
                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: 4, width: '100%',}}>
                        <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                            <Typography variant='h5'>Back</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={handleSubmit}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                            <Typography variant='h5'>Create Log</Typography>
                        </Box>
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
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
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
export function ReportModal() {
    const [createLog, setCreateLog] = useState({startLocation: '', endLocation: '', startMileage: '', endMileage: '', route: '', fuelLevel: '' })
    const [report, setReport] = useState({location: '', description: '', image: 'Clicks Here to upload image'})

    const [age, setAge] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setAge(e.target.value)
        const name = e.target.name
        const value = e.target.value
        setReport({...createLog, [name]: value})
    }

    const handleCreateLog = (e)=>{
        e.preventDefaults()
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem', }} >
                <Typography variant='h5'>Create Log</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={reportStyle}>
                    <Box >
                        <Typography variant="h4" fontWeight={'500'}>Create 
                        Report</Typography>
                    </Box>

                    <Box sx={{mt: 4}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Incident Location</Typography>
                        <input className='input' name = {"location"} value={report.location} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>

                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' sx={{mb: '.5rem'}}>Description</Typography>
                        <textarea className="input" onChange={(e)=> handleChange(e) } value={report.description} name="description" id="description" cols="30" rows="10" style={{width: '100%', height:'4.5rem', background: "white", color: 'black', resize: 'none'}}></textarea>
                    </Box>

                    <Box sx={{mt: 3, width: '100%'}}>
                        <Typography  variant='h5' sx={{mb: '.5rem'}}>Upload Image</Typography>
                        <input className='input' id="image" name = {"image"} onChange={(e)=> handleChange(e) } type="file" style={{width: '0', height:'0rem', background: "white", color: 'black', visibility: 'hidden', cursor: 'pointer'}}/>
                        <Box bgcolor={'primary.light'} sx={{height: '2.5rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray', borderRadius: '.2rem', mt: '-1.5rem', cursor: 'pointer'}}>
                            <label htmlFor="image" style={{cursor: 'pointer', height: '2.5rem', width: '100%',display:'flex', alignItems: 'center', }}> {report.image}</label> 
                        </Box>
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

export function FeedBackModal() {
    const [feedback, setFeedback] = useState("")
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = useState(0)
    const [index, setIndex] = useState([])
    const [inputError, setInputError] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setFeedback(e.target.value)
        setInputError(false)
    }

    const handleSubmit = (e)=>{
        if(!feedback){
            console.log('feedback missing.')
            setInputError(true)
        }
        if(feedback){

        console.log('feedback not missing.')
        localStorage.setItem('count', count)
        localStorage.setItem('feedback', feedback)
        setOpen(false)
        }
    }
    const handleClick = (ind)=>{
        setIndex([...index, ind])
        if(!index.includes(ind)){
            setCount(count + 1)
        }
        if(index.includes(ind)){
            setCount(count - 1)
            const newIndex = index.filter(data => data !== ind)
            setIndex(newIndex)
        }
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '100%',mt: '1rem' }} >
                <Typography variant='h5'>Give Feedback</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={reportStyle}>
                    <Typography variant="h4" fontWeight={'600'}>Rate your experience</Typography>
                    <Typography variant='h5' fontWeight={'500'} sx={{mt: '.75rem'}}>Are you satisfied with your service</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', m: '1.25rem 0', gap: '.75rem'}}>
                        <Box onClick={()=>handleClick('1')} sx={{cursor: 'pointer'}}>{count >= 1? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box onClick={()=>handleClick('2')} sx={{cursor: 'pointer'}}>{count >= 2? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box onClick={()=>handleClick('3')} sx={{cursor: 'pointer'}}>{count >= 3? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box onClick={()=>handleClick('4')} sx={{cursor: 'pointer'}}>{count >= 4? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box onClick={()=>handleClick('5')} sx={{cursor: 'pointer'}}>{count >= 5? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                    </Box>
                    
                    <Typography variant='h5' fontWeight={'500'} sx={{mb: '1.3rem'}}>Drop Feedback</Typography>
                    <input className={inputError?'input input-error':'input'} name = {"feedback"} value={feedback} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>

                    <Box className='mid-btn primary-btn' onClick={handleSubmit}  sx={{mt: '1.5rem' }}>
                        <Typography variant='h5'>Submit</Typography>
                    </Box>
                    
                </Box>
            </Modal>
        </div>
    );
}

export function AcceptRequestModal() {
    const [feedback, setFeedback] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e)=>{
        setFeedback(e.target.value)
    }

    const handleProceed = (e)=>{
        // run a request to patch the planMaint and change it to accepted
        setOpen(false)
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem',mt: '1rem' }} >
                <Typography variant='h5'>Accept Request</Typography> 
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={reportStyle}>
                    <Typography variant="h4" fontWeight={'500'}>Accept Request</Typography>
                    <Typography variant='h5' fontWeight={'400'} sx={{mt: '1rem'}}>You have accepted this request, click the button below to proceed</Typography>                    

                    <Box className='mid-btn primary-btn' onClick={handleProceed}  sx={{mt: '1.5rem' }}>
                        <Typography variant='h5'>Proceed</Typography>
                    </Box>
                    
                </Box>
            </Modal>
        </div>
    );
}

export function SelectMaintStatusModal({id, classname, name,title,icon }) {
    const [open, setOpen] = React.useState(false);
    const {status, setStatus} = ChatState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleProceed = (id)=>{
        // run a request to patch the planMaint and change it to accepted
        setStatus(id)
        localStorage.setItem("status", id)
        setOpen(false)

    }
    return (
        <div style={{borderColor: '#FFFFF', width: '100%'}}>
            <Box onClick={handleOpen} className={status === `${id}`?`${classname} `:"stat"} sx={{width: '100%'}}>
                <Box className={''} sx={{display: 'flex', alignItems: 'center',  height: '100%', width: '2rem', borderRadius: '.3rem' }}>{icon}</Box>
                <Typography variant="h5" fontWeight={'500'} ml={'.5rem'} component="div">{name}</Typography>
            </Box> 

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={reportStyle}>
                    <Typography variant="h4" fontWeight={'600'}>{title}</Typography>
                    <Typography variant='h5' fontWeight={'500'} sx={{mt: '1rem'}}>Click the button below to proceed</Typography>                    
                    
                    <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',gap: '1rem', mt: 4, width: '100%',}}>
                        <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem' }}>
                            <Typography variant='h5'>Cancel</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={()=>handleProceed(id)}  sx={{  textTransform: 'none' , width: '8rem', }}>
                            <Typography variant='h5'>Proceed</Typography>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}


export function MaintFeedBackModal() {
    const [feedback, setFeedback] = useState("")
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = useState(0)

    useEffect(() => {
        const rateCount = localStorage.getItem('count')
        const feedback = localStorage.getItem('feedback')
        setFeedback(feedback)
        setCount(rateCount)
    }, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const handleCreateLog = (e)=>{
    }
    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '100%',mt: '1rem' }} >
                <Typography variant='h5'>View Feedback</Typography> 
            </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={reportStyle}>
                    <Typography variant="h4" fontWeight={'600'}>Personnel Rating</Typography>
                    {/* <Typography variant='h5' fontWeight={'500'} sx={{mt: '.75rem'}}>Are you satisfied </Typography> */}
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', m: '1.25rem 0', gap: '.75rem'}}>
                        <Box sx={{cursor: 'pointer'}}>{count >= 1? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box sx={{cursor: 'pointer'}}>{count >= 2? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box sx={{cursor: 'pointer'}}>{count >= 3? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box sx={{cursor: 'pointer'}}>{count >= 4? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>
                        <Box sx={{cursor: 'pointer'}}>{count >= 5? <GoStarFill className='starFill' size={'2rem'} />:<GoStar className='star' size={'2rem'} />} </Box>

                    </Box>
                    
                    <Typography variant='h5' fontWeight={'600'} sx={{mb: '1.3rem'}}>Feedback</Typography>
                    <Typography variant='h5' fontWeight={'500'} sx={{mb: '1.3rem'}}>{feedback}</Typography>

                    <Box className='mid-btn back-btn' onClick={handleClose}  sx={{mt: '1.5rem' }}>
                        <Typography variant='h5'>Close</Typography>
                    </Box>
                    
                </Box>
            </Modal>
        </div>
    );
}

export function CreateMaintLogModal() {
    const [open, setOpen] = React.useState(false);
    const [maintLog, setMaintLog] = useState({concerns: '', services: [], cost: ''})
    const [openServices, setOpenServices]= useState(false)
    const services = ['Oil Change', 'Brake Inspension and Repair', 'Tire replacement', 'Suspension Inspection/Repair', 'Engine Check', 'AC Inspection/Repair', 'Head Lamp Replacement', 'Tracficator(s) Replacement' ]
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setMaintLog({...maintLog, [cost]: Number(value).toLocaleString})
        
    }

    const handleSubmit = ()=>{
    }
    
    const handleServices = ()=>{
        if(openServices){setOpenServices(false)}
        if(!openServices){setOpenServices(true)}
    }
    const handleServiceSelect =(data)=>{
        const services = maintLog.services
        if(services.includes(data)){
            const newServices = services.filter((res)=> res !== data)
            setMaintLog({...maintLog, services: newServices})
        }else{
        services.push(data)
        setMaintLog({...maintLog, services: services})
        console.log(maintLog.services)
        }
    }

    const handleRemoveService = (data)=>{
        const newServices = maintLog.services.filter((res)=> res !== data)
        setMaintLog({...maintLog, services: newServices})
    }

    return (
        <div style={{borderColor: '#FFFFF'}}>
            <Box className='mid-btn primary-btn' onClick={handleOpen} sx={{width: '10rem' }} >
                <Typography variant='h5'>Create Log</Typography> 
            </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={planMaintStyle}>
                    <Box >
                        <Typography variant="h4" fontWeight={'500'}>Create Maintenance Log</Typography>
                    </Box>

                    <Box sx={{mt: 4}}>
                        <Typography variant='h5' fontWeight={'400'} sx={{mb: '.5rem'}}>Concerns</Typography>
                        <textarea cols={'30'} rows={'10'} className='input' name = {"concern"} value={maintLog.concerns} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'4.5rem', background: "white", color: 'black', resize: 'none'}}/>
                    </Box>

                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' fontWeight={'400'} sx={{mb: '.5rem'}}>Services</Typography>
                        {maintLog.services.length > 0 && <Box sx={{ maxHeight: '11rem',p: '.5rem', borderRadius: '.3rem', mb: '.75rem', border: '1px solid gray', overflowY: 'auto'}}>
                            {maintLog.services.map((data, ind)=>{
                                return(
                                        <Box key={ind} className={'small-rounded-btn'}>
                                            <Box onClick={()=>handleRemoveService(data)} className={'service-icon'} sx={{display: 'flex', alignItems: 'center', height: '100%', mr: '.5rem', cursor: 'pointer'}}><IoIosCloseCircleOutline size={'1.2rem'} /> </Box>
                                            <Typography variant='h6'>{data}</Typography> 
                                        </Box>

                                )
                            })}
                        </Box>}

                        <Box  sx={{ position: 'relative', }}>

                            <Box className={'mid-btn primary-btn'} onClick={handleServices} sx={{justifyContent: 'space-between', p: '0 .5rem'}}>

                                <Typography variant='h5' fontWeight={'400'} >Select Service(s)</Typography>
                                <Box sx={{height: '1000%', display: 'flex', alignItems: 'center'}}>{!openServices ? <FaCaretDown size={'1.5rem'} />:<FaCaretUp size={'1.5rem'} />} </Box>
                            </Box>

                            {openServices && <Box sx={{position: 'absolute', top: '2.6rem', left: '-.5%', width: '100%', background: 'white', border: '1px solid gray', p: '.5rem 0', borderRadius: '.3rem', width: '101%', maxHeight: '10.75rem', overflow: 'auto'}}>
                                {services.map((data,ind)=>{
                                    return (
                                        <Box key={ind} onClick={()=>handleServiceSelect(data)} className={'service-list'}>
                                            <Typography variant='h6'>{data}</Typography>
                                        </Box>
                                    )
                                })}
                            </Box>}
                        </Box>
                    </Box>

                    <Box sx={{mt: 3}}>
                        <Typography variant='h5' fontWeight={'400'} sx={{mb: '.5rem'}}>Cost</Typography>
                        <input className='input' name = {"cost"} value={maintLog.cost} onChange={(e)=> handleChange(e) } type="text" style={{width: '100%', height:'2.5rem', background: "white", color: 'black'}}/>
                    </Box>

                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',justifyContent: 'space-between',gap: '1rem', mt: 4, width: '100%',}}>
                        <Box className='mid-btn back-btn' onClick={handleClose}  sx={{ textTransform: 'none', width: '8rem', display: 'flex' }}>
                            <Typography variant='h5'>Back</Typography>
                        </Box>
                        <Box className='mid-btn primary-btn' onClick={handleSubmit}  sx={{  textTransform: 'none' , width: '8rem', display: 'flex', justifySelf: 'flex-end' }}>
                            <Typography variant='h5'>Create Log</Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}