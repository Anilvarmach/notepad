import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext/index.jsx';
import { NotesProvider } from './context/NotesContext/index.jsx';
import { SideBarProvider } from './context/SideBarContext/index.jsx';

import App from './App.jsx';

//import Test from './Test.jsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <NotesProvider>
                <SideBarProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </SideBarProvider>
            </NotesProvider>
        </ThemeProvider>
    </React.StrictMode>
);
