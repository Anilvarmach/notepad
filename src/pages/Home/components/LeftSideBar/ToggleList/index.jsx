import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';

const ToggleList = props => {
    const [selectedOption, setSeletedOption] = useState('all');
    const handleChange = val => {
        const option = val.target.value;
        setSeletedOption(option);
        props.onSelect(option);
    };
    return (
        <ToggleButtonGroup color='primary' value={selectedOption} exclusive onChange={handleChange} aria-label='Platform'>
            <ToggleButton value='all'>All</ToggleButton>
            <ToggleButton value='bookmarks'>Bookmarks</ToggleButton>
            <ToggleButton value='collections'>Collections</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleList;
