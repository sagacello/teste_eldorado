const express = require('express');
require('dotenv').config();
const cors = require('cors');

const categories = require('./src/routes/categoriesRoute');
const devices = require('./src/routes/devicesRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use(categories);
app.use(devices);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`'----------------->> Server running on ${PORT}`));
