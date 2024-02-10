import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';

const SelectFetchedUser = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [checked, setChecked] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setChecked(true);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedOption} onChange={handleOptionChange} renderValue={() => selectedOption} >
            <MenuItem value="Option 1">
                <Checkbox checked={selectedOption === 'Option 1'} />
                <ListItemText primary="Option 1" />
            </MenuItem>
            <MenuItem value="Option 2">
                <Checkbox checked={selectedOption === 'Option 2'} />
                <ListItemText primary="Option 2" />
            </MenuItem>
            <MenuItem value="Option 3">
                <Checkbox checked={selectedOption === 'Option 3'} />
                <ListItemText primary="Option 3" />
            </MenuItem>
        </Select>
        </FormControl>
    );
};

export default SelectFetchedUser;
