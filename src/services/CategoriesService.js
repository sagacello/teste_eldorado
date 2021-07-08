const { Categories } = require('../models');

const createCategory = async (body) => {
  const { name } = body;
  try {
    const category = await Categories.create({ name });
    return category;
  } catch (error) {
    return error.message;
  }
};

const getAllcategories = async () => {
  try {
    const categories = await Categories.findAll();
    return categories;
  } catch (error) {
    return error.message;
  }
};

const getCategoryById = async (id) => {
  try {
    const categoryId = await Categories.findByPk(id);
    return categoryId;
  } catch (error) {
    return error.message;
  }
};

const deleteCategoryById = async (id) => {
  try {
    await Categories.destroy({ where: { id } });
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createCategory,
  getAllcategories,
  getCategoryById,
  deleteCategoryById,
};
