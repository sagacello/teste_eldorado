const express = require('express');
const router = express.Router();

const devicesControllers = require('../controllers/devicesControllers');

router.post('/devices', devicesControllers.createDevice);
router.get('/devices', devicesControllers.getAllDevices);
router.get('/devices/:id', devicesControllers.getDeviceById);

module.exports = router;
