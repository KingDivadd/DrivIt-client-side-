import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Button, Box, Typography, useTheme, } from '@mui/material'
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from '@mui/material';
import ExpandableButton from './collapse-msg';

export default function NotificationPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <Avatar sx={{background: '#E8EFFC', height: '2.5rem', width: '2.5rem', cursor: 'pointer', mr: '.5rem'}} onClick={handleClick}><IoMdNotificationsOutline size={'1.75rem'} color='#1B61E4' /> </Avatar>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >

        
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', p: '.75rem', borderRadius: '.3rem', l: '2.5rem', t: '.5rem', height: '25rem', overFlowY: 'auto'}}>
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />
                <ExpandableButton />

                

            </Box>
        </Popover>
        </div>
    );
}