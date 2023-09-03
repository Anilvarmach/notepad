/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';

import { Box, Stack, IconButton } from '@mui/material';
import { Settings, Logout, LightModeOutlined, Person, DarkModeOutlined } from '@mui/icons-material';

// import { ThemeContext } from '../../../../context/ThemeContext';
import { SideBarContext } from '../../../../context/SideBarContext';
import { NotesContext } from '../../../../context/NotesContext';

import NotesList from './NotesList';

import leftSidebarStyles from './LeftSideBar.module.scss';
import ToggleList from './ToggleList';
import { useEffect } from 'react';

const LeftSideBar = () => {
    const { notes, bookmarks, noteCount } = useContext(NotesContext);
    const { showLeftSideBar } = useContext(SideBarContext);
    const [noteArray, setNoteArray] = useState([]);

    console.log({ noteCount });

    useEffect(() => {
        setNoteArray(notes);
    }, [noteCount]);

    const listHandler = value => {
        if (value === 'all') {
            setNoteArray(notes);
        } else if (value === 'bookmarks') {
            const bookmarkArray = bookmarks?.map(bookmark => notes.find(note => note.note_id === bookmark));
            console.log({ bookmarkArray });
            setNoteArray(bookmarkArray ? bookmarkArray : []);
        }
    };

    return (
        <>
            {showLeftSideBar ? (
                <Stack className={`${leftSidebarStyles.leftSidebar_container} primary-background`}>
                    {/* <Box className={leftSidebarStyles.navbar}>Nav bar</Box> */}
                    <Box className={leftSidebarStyles.notes_list}>
                        <ToggleList onSelect={listHandler} />
                        <NotesList notes={noteArray} />
                    </Box>
                </Stack>
            ) : null}
        </>
    );
};

export default LeftSideBar;
