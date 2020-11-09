import { mungeLocation } from './utils.js';

require('dotenv').config();
require('./lib/client').connect();



const express = require('express');
const cors = require('cors');
const request = require('superagent');
const app = require('./lib/app');
const port = 3000;
const PORT = process.env.PORT || 3000;

app.use(cors());




app.get('/', async(req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${req.query.search}&format=json`;
  
    const response = await request.get(URL);
  
    const newResponse = mungeLocation(response.body);

    // STRICTLY TYPED language
    // TYPESCRIPT is a SUPERSET of JS
  
    res.json(newResponse);
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
