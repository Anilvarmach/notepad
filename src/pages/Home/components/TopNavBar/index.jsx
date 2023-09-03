/* eslint-disable react/prop-types */

import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Button } from '@mui/material';
import { HighlightOffOutlined, MenuOpenOutlined } from '@mui/icons-material';

import { SideBarContext } from '../../../../context/SideBarContext';

import topNavbarStyles from './TopNavBar.module.scss';

const TopNavBar = () => {
    const navigate = useNavigate();
    const { showLeftSideBar, updateLeftSidebar } = useContext(SideBarContext);

    return (
        <Stack className={`${topNavbarStyles.topNavbar_container} primary-background`}>
            <Box className={topNavbarStyles.logo}>
                <Box
                    className={topNavbarStyles.menu_icons}
                    onClick={() => {
                        updateLeftSidebar(!showLeftSideBar);
                    }}>
                    {!showLeftSideBar ? <MenuOpenOutlined className={topNavbarStyles.toggleIcon} /> : <HighlightOffOutlined className={topNavbarStyles.closeIcon} />}
                </Box>

                <Box className={topNavbarStyles.logo_img}></Box>

                <Typography className={topNavbarStyles.logo_text}>
                    My <span className={topNavbarStyles.sub_string}>N</span>ote
                </Typography>
            </Box>

            <Box className={topNavbarStyles.btn_container}>
                <Button variant='contained' className={topNavbarStyles.createBth} onClick={() => navigate('/create')}>
                    Create
                </Button>
            </Box>
        </Stack>
    );
};

export default TopNavBar;
