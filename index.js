const express = require('express');
require('dotenv').config();

const categories = require('./src/routes/categoriesRoute');
const devices = require('./src/routes/devicesRoute');

const app = express();
app.use(express.json());


app.use(categories);
app.use(devices);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log('-------------------->> 3000!'));

app.get('/', (_req, res) => {
  response.send();
});