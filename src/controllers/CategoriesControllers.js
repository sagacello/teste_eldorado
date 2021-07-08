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


module.exports = {
  createCategory,
};
