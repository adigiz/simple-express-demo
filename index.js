const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();
const port = 3000;

const readRoute = require('./routes/read');
const createRoute = require('./routes/create');

app.use(bodyParser);
app.use(createRoute);
app.use(readRoute);

app.listen(port, () => {
  console.log(`Express JSON API service listening on port ${port}!`);
});

module.exports = app;