/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';

import { Box, IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { Outlet, useNavigate } from 'react-router-dom';

import TopNavBar from './components/TopNavBar';
import LeftSideBar from './components/LeftSideBar';

import { SideBarContext } from '../../context/SideBarContext';

import homeStyles from './Home.module.scss';

const Home = () => {
    const { showLeftSideBar, updateLeftSidebar } = useContext(SideBarContext);

    useEffect(() => {
        const handleResize = () => {
            const flg = window.innerWidth > 650;
            updateLeftSidebar(flg);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <Box className={`${homeStyles.container} primary-background`}>
            <TopNavBar />
            <Box className={`${homeStyles.main} secondary-background`}>
                <LeftSideBar showLeftSideBar={showLeftSideBar} />
                <Outlet />
                {!showLeftSideBar && (
                    <IconButton className={homeStyles.createBtn} onClick={() => navigate('/create')}>
                        <AddOutlined className={homeStyles.addIcon} />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
};

export default Home;
