const fs = require('fs');
const path = require('path');

// Function allows the user to create a new note
function newNote(body, noteArray) {
  const createNote = body;
  if (!Array.isArray(noteArray))
    noteArray = [];

  if (noteArray.length === 0)
    noteArray.push(0);

  body.id = noteArray[0]
  noteArray[0]++;

  noteArray.push(createNote);
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify(noteArray, null, 2)
  );
  return createNote;
}

module.exports = newNote;