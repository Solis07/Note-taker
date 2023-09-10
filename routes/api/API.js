const router = require('express').Router();
const  newNote  = require('../../lib/note');
const fs = require('fs');

router.post('/notes', (req, res) => {
    const allNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = newNote(req.body, allNotes);
    res.json(newNotes);
});

router.get('/notes', (req, res) => {
    // Checking to see if it works properly.
    console.log('Hope it works')
    const allNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    res.json(allNotes);
})
module.exports = router;