/* eslint-disable react/prop-types */
// ThemeContext.js
import { createContext, useState, useEffect } from 'react';

import { getNotesFromStorage, getBookmarksFromStorage } from '../../utils/manipulateNotes';

// Create a context
export const NotesContext = createContext();

// Create a provider component
export function NotesProvider({ children }) {
    const [notes, setNotes] = useState(() => getNotesFromStorage());
    const [bookmarks, setBookmarks] = useState(() => getBookmarksFromStorage());

    const [noteCount, setNoteCount] = useState(0);

    useEffect(() => {
        setNotes(() => getNotesFromStorage());
    }, [noteCount]);

    const setNoteCounter = () => {
        setNoteCount(prev => prev + 1);
    };

    const handleBookmark = id => {
        const arr = [...bookmarks, id];
        setBookmarks(arr);
        localStorage.setItem('bookmarks', JSON.stringify(arr));
    };

    return <NotesContext.Provider value={{ notes, noteCount, setNoteCounter, handleBookmark, bookmarks }}>{children}</NotesContext.Provider>;
}

/**
 * [
        {
            '13-08-2023': {
                {
                    1691911052358: {
                        date: '13-08-2023',
                        dateTime: '13th August 2023, 12:47 pm',
                        title: 'mCBVFS',
                        content: '<p>&nbsp;vmfnxcv</p>',
                    },
                },
                {
                    1691911060636: {
                        date: '13-08-2023',
                        dateTime: '13th August 2023, 12:47 pm',
                        title: 'mCBVFSnsf bv MSFN',
                        content: '<p>&nbsp;vmfnxcv</p>',
                    },
                },
            },
        },
        {
            '14-08-2023': {
                {
                    1691997615925: {
                        date: '14-08-2023',
                        dateTime: '14th August 2023, 12:49 pm',
                        title: 'fsmgabmdfz',
                        content: '<p>sa bvfmnsv fdv</p>',
                    },
                },
                {
                    1691997621407: {
                        date: '14-08-2023',
                        dateTime: '14th August 2023, 12:49 pm',
                        title: 'fsmgabmdfzfs bvmzdf',
                        content: '<p>sa bvfmnsv fdv</p>',
                    },
                },
            },
        },
    ]
 */
