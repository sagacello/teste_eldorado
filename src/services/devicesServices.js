const { Devices, Categories } = require('../models');

const ERR_MESSAGE_CATEGORIES = {
  message: 'Category does not exist',
  STATUS: 400,
};

const validateCategories = (categoryIds) => {
  if (!categoryIds) throw ERR_MESSAGE_CATEGORIES;
};

const createDevice = async (body) => {
  const { categoryId, color, partNumber } = body;
  const category = await Categories.findByPk(categoryId);
  validateCategories(category.dataValues.id);
  try {
    const device = await Devices.create({
      color,
      partNumber,
      categoryId: category.id,
    });
    return device;
  } catch (error) {
    return error.message;
  }
};

const getAllDevices = async () => {
  try {
    const allDevices = await Devices.findAll();
    return allDevices;
  } catch (error) {
    return error.message;
  }
};

const getDeviceById = async (id) => {
  try {
    const deviceId = await Devices.findByPk(id);
    return deviceId;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
};
