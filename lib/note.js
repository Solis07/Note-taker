const fs = require('fs');
const path = require('path');

// Function allows the user to create a new note
function newNote(body, noteArray) {
  const createNote = body;
  noteArray.push(createNote);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteArray, null, 2)
  );
  return createNote;
}

module.exports = newNote;