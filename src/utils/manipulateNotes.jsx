export const getNotesFromStorage = () => {
    const storedNotes = localStorage.getItem('notes');
    const notes = storedNotes ? JSON.parse(storedNotes) : [];
    return notes;
};

export const getBookmarksFromStorage = () => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

export const setNotesToStorage = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

export const createNotes = obj => {
    const notes = getNotesFromStorage();
    const newNote = { ...obj, note_id: `${Date.now()}` };

    setNotesToStorage([newNote, ...notes]);
};

export const viewNotes = id => {
    const notes = getNotesFromStorage();
    const viewNote = notes.find(note => note.note_id === id);
    return viewNote;
};

export const updateNote = (id, obj) => {
    const notes = getNotesFromStorage();
    const noteIndex = notes.findIndex(note => note.note_id === id);
    notes[noteIndex] = obj;
    setNotesToStorage(notes);
};

export const deleteNotes = id => {
    const notes = getNotesFromStorage();
    const remainingNotes = notes.filter(note => note.note_id !== id);

    setNotesToStorage(remainingNotes);
};
