const express = require('express');
require('dotenv').config();

const categories = require('./src/routes/categoriesRoute');

const app = express();
app.use(express.json());


app.use(categories);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log('-------------------->> 3000!'));

app.get('/', (request, response) => {
  response.send();
});