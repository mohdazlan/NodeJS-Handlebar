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

app.get('/', (req, res) => {
  res.send(`a get request with a / route on port ${PORT} to retrieve items`);
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
