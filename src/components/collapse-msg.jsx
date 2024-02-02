import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

const ExpandableButton = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
        <Box className={'notification'} sx={{height: '2rem', mb: '.5rem'}} onClick={handleClick} variant="contained" color="primary">
            <Typography variant={'h5'} fontWeight={'500'}>
                Click to Expand
            </Typography>
        </Box>
        <Collapse in={expanded}>
            <Typography variant="h6" fontWeight={'400'} mb={'1rem'} >
                Additional content revealed when the button is clicked.
            </Typography>
        </Collapse>
        </div>
    );
};

export default ExpandableButton;
