const { Categories } = require('../models');

const createCategory = async (body) => {
  const { name } = body;
  const category = await Categories.create({ name });
  return category;
};

module.exports = {
    createCategory,
  };