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

const getAllDevices = async (_req, res) => {
  try {
    const allDevices = await devicesService.getAllDevices();
    return res.status(200).json(allDevices);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};


const getAllDevicesAndCategories = async (_req, res) => {
  try {
    const allDevicesCategory = await devicesService.getAllDevicesAndCategories();
    return res.status(200).json(allDevicesCategory);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const getAllDevicesAndCategoriesFromId = async (req, res) => {
  try {
    const { id } = req.params;
    const allDevicesCategoryFromId = await devicesService.getAllDevicesAndCategoriesFromId(id);
    return res.status(200).json(allDevicesCategoryFromId);
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

const deleteDeviceById = async (req, res) => {
  try {
    const { id } = req.params;
    await devicesService.deleteDeviceById(id);
    return res
      .status(200)
      .json({ message: `O despositivo ${id} foi deletado com sucesso ` });
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const updateDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const { color, partNumber } = req.body;
    const newDevice = await devicesService.updateDevice(color, partNumber, id);
    return res.status(200).json(newDevice);
  } catch (error) {
    const { message, STATUS } = error;
    return res.status(STATUS).json({ message });
  }
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
  deleteDeviceById,
  updateDevice,
  getAllDevicesAndCategories,
  getAllDevicesAndCategoriesFromId,
};
