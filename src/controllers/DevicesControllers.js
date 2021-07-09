const devicesService = require('../services/devicesServices');

const createDevice = async (req, res) => {
  try {
    const { body } = req;
    const device = await devicesService.createDevice(body);
    return res.status(201).json(device);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createDevice,
  };