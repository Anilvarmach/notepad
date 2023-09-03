/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Box, Button, Typography } from '@mui/material';
import Input from '@mui/joy/Input';

import { NotesContext } from '../../../context/NotesContext';

import Header from '../Header';
import Quill from '../NoteEditor/Quill';

import { displayDateFormatter } from '../../../utils/DateFormatter';

import { createNotes, viewNotes, updateNote } from '../../../utils/manipulateNotes';

import createStyle from './Create.module.scss';

const CreateNote = () => {
    const { setNoteCounter } = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const { note_id } = useParams();

    const dateTime = displayDateFormatter();

    const isEditMode = !!note_id;

    useEffect(() => {
        if (note_id) {
            const note = viewNotes(note_id);
            const { title, content } = note;
            setTitle(title);
            setContent(content);
        }
    }, [note_id]);

    const handleReset = () => {
        setTitle('');
        setContent('');
    };

    const handleSave = () => {
        if (!isEditMode) {
            createNotes({ dateTime, title, content });
            toast.success(`${title} created Successfully`);
        } else {
            updateNote(note_id, { note_id, dateTime, title, content });
            toast.success(`${title} updated Successfully`);
        }

        setNoteCounter();
        handleReset();
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <>
            <Box className={`${createStyle.container} primary-background`}>
                <Header mode={isEditMode ? 'update' : 'create'} dateTime={dateTime} />
                <Box className={createStyle.notes_form}>
                    <Box className={createStyle.title_box}>
                        <Typography className={`${createStyle.label} into-text`}>Title:</Typography>
                        <Input
                            placeholder='Type in here…'
                            variant='outlined'
                            value={title}
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                        />
                    </Box>
                    <Box className={createStyle.editor_box}>
                        <Typography className='into-text'>Notes:</Typography>
                        <Quill value={content} onChange={setContent} />
                    </Box>
                </Box>
                <Box className={createStyle.btn_box}>
                    <Button color='error' className={createStyle.btn} variant='outlined' onClick={handleCancel}>
                        Cancel
                    </Button>
                    {!isEditMode && (
                        <Button variant='outlined' className={createStyle.btn} onClick={handleReset}>
                            Reset
                        </Button>
                    )}
                    <Button variant='outlined' className={createStyle.btn} color='success' onClick={handleSave}>
                        {isEditMode ? 'Edit' : 'Save'}
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default CreateNote;
