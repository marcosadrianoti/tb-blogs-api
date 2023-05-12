const CategoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const categoryData = req.body;

    const category = await CategoryService.createCategory(categoryData);
    
    if (category.status !== 201) {
      return res.status(category.status).json(category.message);
    }

    return res.status(201).json(category.message);
};

// const getUsers = async (req, res) => {
//   const users = await UserService.getUsers();
//   return res.status(users.status).json(users.message);
// };

// const getByUserId = async (req, res) => {
//   const userId = req.params.id;
//   const user = await UserService.getByUserId(userId);
//   if (user.status !== 200) {
//     return res.status(user.status).json(user.message);
//   }
//   return res.status(200).json(user.message);
// };

module.exports = {
  createCategory,
};
