// require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

const port = 3000;

app.listen(port, console.log(`Listening on port: ${port}`));