const express = require('express');
const app = express();
const port = 3000;
const dbconnection = require('./src/v1/database/database.js');

app.get('/', (req, res) => {
  res.send('Hello from building a REST API in JavaScript with Express');
});

app.listen(port, () =>
  console.log(`Running the API. We are listening on port ${port}!`)
);
