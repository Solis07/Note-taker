const router = require('express').Router();
const { newNote } = require('./lib/note.js');
let { noteArray } = require('./db/db.json');

router.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body,);
    res.json(newNote);
});

module.exports = router;