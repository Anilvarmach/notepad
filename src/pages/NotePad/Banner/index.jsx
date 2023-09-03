/* eslint-disable react/prop-types */

import { Fragment, useContext } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { BookmarkAdd, BookmarkRemove, Delete, Download, Edit, Print } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';

import { NotesContext } from '../../../context/NotesContext';
import { deleteNotes } from '../../../utils/manipulateNotes';
import { printContent, downloadContent } from '../../../utils/printAndDownload';

import bannerStyle from '../CreateNote/Create.module.scss';

const Banner = ({ content, title }) => {
    const { note_id } = useParams();
    const navigate = useNavigate();

    const { setNoteCounter, handleBookmark, bookmarks } = useContext(NotesContext);

    const isBookmarked = bookmarks.includes(note_id);

    const bannerOptions = [
        {
            title: isBookmarked ? 'Un Bookmark' : 'Bookmark',
            icons: isBookmarked ? BookmarkRemove : BookmarkAdd,
        },
        {
            title: 'Download',
            icons: Download,
        },
        {
            title: 'Print',
            icons: Print,
        },
        {
            title: 'Edit',
            icons: Edit,
        },
        {
            title: 'Delete',
            icons: Delete,
        },
    ];

    const handleBannerOptionClick = action => {
        if (action === 'Bookmark') {
            handleBookmark(note_id, isBookmarked);
        }

        if (action === 'Download') {
            downloadContent(title, content);
        }

        if (action === 'Print') {
            printContent(title, content);
        }

        if (action === 'Edit') {
            navigate(`/create/${note_id}`);
        }

        if (action === 'Delete') {
            deleteNotes(note_id);
            setNoteCounter();
            navigate('/');
        }
    };

    return (
        <Box className={bannerStyle.banner_container}>
            {bannerOptions.map((opt, i) => {
                const Icon = opt.icons;
                return (
                    <Fragment key={i}>
                        <Tooltip title={opt.title} placement='left'>
                            <IconButton onClick={() => handleBannerOptionClick(opt.title)}>
                                <Icon />
                            </IconButton>
                        </Tooltip>
                    </Fragment>
                );
            })}
        </Box>
    );
};

export default Banner;
