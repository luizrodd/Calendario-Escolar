// Step 3: server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(cors()); // Enable CORS for all routes

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;