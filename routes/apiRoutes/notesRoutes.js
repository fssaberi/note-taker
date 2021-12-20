const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { getNotes, saveNote, deleteNote, renderActiveNote, handleNoteSave, handleNoteDelete, handleNoteView,
handleNewNoteView, handleRenderSaveBtn, renderNoteList, getAndRenderNotes } = require('../../public/assets/js/index');

router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = getNotes(req.query, results);
    }
    res.json(results);
});

// router.post('/api/notes', (req, res) => {
//     req.body.id = notes.length.toString();

//     if ()
// })

module.exports = router;