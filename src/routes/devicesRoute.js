const express = require('express');
const router = express.Router();

const devicesControllers = require('../controllers/devicesControllers');

router.post('/devices', devicesControllers.createDevice);


module.exports = router;