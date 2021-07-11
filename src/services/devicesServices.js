const { Devices, Categories } = require('../models');
const { devicesValidation } = require('../validations/devicesValidation');

const existCategories = (categoryIds) => {
  ERR_MESSAGE_CATEGORIES = {
    message: 'Category does not exist',
    STATUS: 404,
  };
  if (!categoryIds) throw ERR_MESSAGE_CATEGORIES;
};

const existDevices = async (id) => {
  ERR_MESSAGE_DEVICES = {
    message: 'Device does not exist',
    STATUS: 404,
  };
  const deviceId = await Devices.findByPk(id);
  if (!deviceId) throw ERR_MESSAGE_DEVICES;
};

const createDevice = async (body) => {
  console.log(body);
  devicesValidation(body);
  const { categoryId, color, partNumber } = body;
  const category = await Categories.findByPk(categoryId);
  existCategories(category);
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

const getAllDevicesAndCategories = async () => {
  try {
    const allDevicesCategory = await Devices.findAll({
      include: [
        {
          model: Categories,
          as: 'category',
        },
      ],
    });
    return allDevicesCategory;
  } catch (error) {
    return error.message;
  }
};

const getAllDevicesAndCategoriesFromId = async (id) => {
  try {
    const allDevicesCategory = await Devices.findAll({
      where: {
        categoryId: id,
      },
      include: [
        {
          model: Categories,
          as: 'category',
        },
      ],
    });
    return allDevicesCategory;
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
  await existDevices(id);
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
  getAllDevicesAndCategories,
  getAllDevicesAndCategoriesFromId,
};
