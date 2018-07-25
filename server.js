const express = require('express');
const app = express();
const path = require('path');
const body = require('body-parser');
// const main = require('./database/data/postgreSQL-main.js');
const databaseController = require('./database/controller');
// const eventController = require('./database/server/event-controller-model.js');

app.use(body.json(), body.urlencoded({ extended: true }));

//** login get user information
app.get('/', (req, res) => {
  console.log('Main page connected');
});
app.get('/login', (req, res) => {});

app.post('/createUser', databaseController.createUserEntry);

//**  add items to stock
app.post('/addStock', databaseController.addItemEntry);

//** get stock table
app.get('/viewStock', () => {});

//** edit individual stock items
app.post('/editStock', () => {});

//** remove record of item in stock
app.post('/deleteItem', () => {});

//**
app.listen(3000, () => {
  console.log('Listening to port 3000');
});

module.exports = app;
