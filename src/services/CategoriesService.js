const { Categories } = require('../models');
const { categoryValidation } = require('../validations/categoriesValidations');

const existCategories = (categoryIds) => {
  ERR_MESSAGE_CATEGORIES = {
    message: 'Category does not exist',
    STATUS: 400,
  };
  if (!categoryIds) throw ERR_MESSAGE_CATEGORIES;
};

const createCategory = async (body) => {
  const { name } = body;
  categoryValidation(body);
  try {
    const category = await Categories.create({ name });
    return category;
  } catch (error) {
    return error.message;
  }
};

const getAllcategories = async () => {
  try {
    const allCategories = await Categories.findAll();
    return allCategories;
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

const updateCategory = async (name, id) => {
  const category = await Categories.findByPk(id);
  existCategories(category);
  try {
    await Categories.update({ name }, { where: { id } });
    const newCategory = await Categories.findByPk(id);
    return newCategory;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createCategory,
  getAllcategories,
  getCategoryById,
  deleteCategoryById,
  updateCategory,
};
