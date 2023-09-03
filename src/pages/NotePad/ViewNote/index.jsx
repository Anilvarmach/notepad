/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import Header from '../Header';

import { viewNotes } from '../../../utils/manipulateNotes';
import { NotesContext } from '../../../context/NotesContext';

import viewsStyle from '../CreateNote/Create.module.scss';
import Banner from '../Banner';

const HtmlToJsxRenderer = ({ htmlString }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const VIewNote = () => {
    const [note, setNote] = useState({});

    const { note_id } = useParams();

    useEffect(() => {
        const note = viewNotes(note_id);
        setNote(note);
    }, [note_id]);

    return (
        <Box className={`${viewsStyle.container} primary-background`}>
            <Header mode={'read'} dateTime={note.dateTime} />
            <Box sx={{ margin: '20px', height: 'calc(100% - 90px)', overflow: 'scroll', scrollbarWidth: 'thin', width: '94%' }}>
                <Typography>{note.title}</Typography>
                <HtmlToJsxRenderer htmlString={note.content} />
            </Box>
            <Box className={viewsStyle.banner_box}>
                <Banner isPreview content={note.content} title={note.title} />
            </Box>
        </Box>
    );
};

export default VIewNote;
