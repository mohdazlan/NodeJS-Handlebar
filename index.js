import express from 'express';
import data from './data/data.json';

const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

const PORT = 3000;

app.listen(PORT, () => {
  console.debug(`Your server is running on port ${chalk.blue.bgRed.bold(PORT)}`);
  console.debug(data);
});

// for this / path load the static public folder
app.use(express.static('public'));

// method to use JSON
app.use(express.json());

// for this imej path load the static folder images
app.use('/imej', express.static('images'));

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/newItem', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/nokp/:id', (req, res) => {
  // this is the middleware that pulls the data
  console.log(req.params.id);
  const user = Number(req.params.id);
  console.log(user);
  console.log(data[user]);
  // middleware that uses the request object
  console.log(`Request from : ${req.originalUrl}`);
  console.log(`Request from : ${req.method}`);
  // everything above is middleware
  res.send(data[user]);
});

app.post('/politeknik', (req, res) => {
  res.send(`a post request with a /politeknik route on port ${PORT} to post an item`);
});

app.put('/temuduga', (req, res) => {
  res.send(`a put request with a /temuduga route on port ${PORT} to update an item`);
});

app.delete('/temuduga', (req, res) => {
  res.send(`a delete request with a /temuduga route on port ${PORT} to delete an item`);
});
