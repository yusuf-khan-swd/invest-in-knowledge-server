const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const category = require('./data/data.json');
const details = require('./data/details.json');

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.get('/category', (req, res) => {
  res.send(category);
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const courseDetails = details.find(detail => detail.id === id);
  res.send(courseDetails);
});

app.listen(port, () => {
  console.log('Server is running on PORT', port);
});