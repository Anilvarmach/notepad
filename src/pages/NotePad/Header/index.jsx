/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIosOutlined, DateRangeRounded } from '@mui/icons-material';

import createStyle from '../CreateNote/Create.module.scss';

const quotes = {
    create: ' Unleash your creativity and organization in the digital realm, one note at a time... ',
    update: `Evolving with every update, we're sculpting a better tomorrow...`,
    read: 'Every note you take is a brick in the foundation of your success.',
};

const Header = ({ mode, dateTime }) => {
    const navigate = useNavigate();
    return (
        <Box className={createStyle.header}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton size='small' onClick={() => navigate('/')} sx={{ marginRight: '10px' }}>
                    <ArrowBackIosOutlined fontSize='small' sx={{ color: '#a6a7ab' }} />
                </IconButton>
                <Typography className={`${createStyle.quote} into-text`}>{quotes[mode]}</Typography>
            </Box>
            <Typography className={`${createStyle.date} into-text`}>
                <DateRangeRounded className={createStyle.icon} /> {dateTime}
            </Typography>
        </Box>
    );
};

export default Header;
