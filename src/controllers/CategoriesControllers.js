const categoriesService = require('../services/CategoriesService');

const createCategory = async (req, res) => {
  try {
    const { body } = req;
    const category = await categoriesService.createCategory(body);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllcategories = async (_req, res) => {
  try {
    const allCategories = await categoriesService.getAllcategories();
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryId = await categoriesService.getCategoryById(id);
    return res.status(200).json(categoryId);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await categoriesService.deleteCategoryById(id);
    return res
      .status(200)
      .json({ message: `A categoria ${id} foi deletada com sucesso ` });
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const newCategory = await categoriesService.updateCategory(name, id);
    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(error.STATUS).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAllcategories,
  getCategoryById,
  deleteCategoryById,
  updateCategory,
};
