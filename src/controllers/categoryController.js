const CategoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const categoryData = req.body;

    const category = await CategoryService.createCategory(categoryData);
    
    if (category.status !== 201) {
      return res.status(category.status).json(category.message);
    }

    return res.status(201).json(category.message);
};

const getCategories = async (req, res) => {
  const categories = await CategoryService.getCategories();
  return res.status(categories.status).json(categories.message);
};

module.exports = {
  createCategory,
  getCategories,
};
