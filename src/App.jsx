import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Box } from '@mui/material';

import { ThemeContext } from './context/ThemeContext';

import Home from './pages/Home';
import Intro from './pages/Home/components/Intro';
import CreateNote from './pages/NotePad/CreateNote';
import VIewNote from './pages/NotePad/ViewNote';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Box className={theme} sx={{ height: '100vh' }}>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' index element={<Intro />} />
                    <Route path='/create' element={<CreateNote />}>
                        <Route path='/create/:note_id' element={<CreateNote />} />
                    </Route>
                    <Route path='/view/:note_id' element={<VIewNote />} />
                </Route>
            </Routes>
            <ToastContainer />
        </Box>
    );
};

export default App;
