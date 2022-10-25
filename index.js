const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const courses = require('./data/courses.json');
const details = require('./data/courseDetails.json');

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const courseDetails = details.find(detail => detail.categoryId === id);
  res.send(courseDetails);
});

app.listen(port, () => {
  console.log('Server is running on PORT', port);
});