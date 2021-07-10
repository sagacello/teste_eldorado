const express = require('express');
const router = express.Router();

const devicesControllers = require('../controllers/devicesControllers');

router.post('/devices', devicesControllers.createDevice);
router.get('/devices', devicesControllers.getAllDevices);
router.get('/devices/:id', devicesControllers.getDeviceById);
router.delete('/devices/:id', devicesControllers.deleteDeviceById);
router.patch('/devices/:id', devicesControllers.updateDevice);
router.get('/devicesCategories', devicesControllers.getAllDevicesAndCategories);


module.exports = router;
