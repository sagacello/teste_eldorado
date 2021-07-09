const devicesService = require('../services/devicesServices');

const createDevice = async (req, res) => {
  try {
    const { body } = req;
    const device = await devicesService.createDevice(body);
    return res.status(201).json(device);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const getAllDevices = async (_req, res) => {
  try {
    const allDevices = await devicesService.getAllDevices();
    return res.status(200).json(allDevices);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const getDeviceById = async (req, res) => {
  try {
    const { id } = req.params;
    const deviceId = await devicesService.getDeviceById(id);
    return res.status(200).json(deviceId);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
};
