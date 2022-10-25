const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const category = require('./data/data.json');

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.get('/category', (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log('Server is running on PORT', port);
});