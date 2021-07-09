const { Devices, Categories } = require('../models');

const ERR_MESSAGE_CATEGORIES = {
  message: 'Category does not exist',
  STATUS: 400,
};

const ERR_MESSAGE_DEVICES = {
  message: 'Device does not exist',
  STATUS: 400,
};

const validateCategories = (categoryIds) => {
  if (!categoryIds) throw ERR_MESSAGE_CATEGORIES;
};

const validateDevices = async (id) => {
  const deviceId = await Devices.findByPk(id);
  if (!deviceId) throw ERR_MESSAGE_DEVICES;
};

const createDevice = async (body) => {
  const { categoryId, color, partNumber } = body;
  const category = await Categories.findByPk(categoryId);
  validateCategories(category);
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

const deleteDeviceById = async (id) => {
  try {
    await Devices.destroy({ where: { id } });
  } catch (error) {
    return error.message;
  }
};

const updateDevice = async (color, partNumber, id) => {
  await validateDevices(id);
  console.log( validateDevices(id))
  try {
    await Devices.update({ color, partNumber }, { where: { id } });
    const newCategory = await Devices.findByPk(id);
    return newCategory;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
  deleteDeviceById,
  updateDevice,
};
