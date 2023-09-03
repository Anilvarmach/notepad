/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

import { Box, IconButton, Typography } from '@mui/material';

import { DeleteOutline, Edit, RemoveRedEye, Summarize } from '@mui/icons-material';

import { NotesContext } from '../../../../../context/NotesContext';

import { deleteNotes } from '../../../../../utils/manipulateNotes';

const NotesList = ({ notes }) => {
    const { setNoteCounter } = useContext(NotesContext);

    const [showActions, setShowActions] = useState('');

    const navigate = useNavigate();

    const handleHover = note => {
        setShowActions(action => (action === note.title ? '' : note.title));
    };

    return (
        <>
            {notes.length ? (
                <List>
                    {notes.map(note => (
                        <ListItemButton key={note.note_id} selected={showActions === note.title} onMouseEnter={() => handleHover(note)} onMouseLeave={() => handleHover(note)}>
                            <ListItemDecorator>
                                <Summarize fontSize='inherit' />
                            </ListItemDecorator>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                                <Box>
                                    <Typography className='into-lg-text'>{note.title}</Typography>
                                    <Typography className='into-sm-text'>{note.dateTime}</Typography>
                                </Box>
                                {showActions === note.title && (
                                    <Box>
                                        <IconButton size='small' onClick={() => navigate(`/view/${note.note_id}`)}>
                                            <RemoveRedEye fontSize='inherit' />
                                        </IconButton>
                                        <IconButton size='small' color='primary' onClick={() => navigate(`/create/${note.note_id}`)}>
                                            <Edit fontSize='inherit' />
                                        </IconButton>
                                        <IconButton
                                            size='small'
                                            color='error'
                                            onClick={() => {
                                                deleteNotes(note.note_id), setNoteCounter();
                                                navigate('/');
                                            }}>
                                            <DeleteOutline fontSize='inherit' />
                                        </IconButton>
                                    </Box>
                                )}
                            </Box>
                        </ListItemButton>
                    ))}
                </List>
            ) : (
                <></>
            )}
        </>
    );
};

export default NotesList;
