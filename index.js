const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from building a REST API in JavaScript with Express');
});

app.listen(port, () =>
  console.log(`Running the API. We are listening on port ${port}!`)
);
