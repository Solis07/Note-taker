// Express
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// Import our files containing our routes
const api = require('./routes/api/API.js');
const html = require('./routes/html/HTML.js');

// Needed for our POST and PUT request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public folder
app.use(express.static("public"));

// API Route
app.use('/api', api);
app.use('/', html)

//Used to bind and listen to the connections on the specified host and port.
app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));
