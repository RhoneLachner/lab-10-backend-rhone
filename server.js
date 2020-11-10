import { mungeLocation } from './utils.js';

require('dotenv').config();
require('./lib/client').connect();



const express = require('express');
const cors = require('cors');
const request = require('superagent');
const app = require('./lib/app');

const PORT = process.env.PORT || 3000;

app.use(cors());



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
