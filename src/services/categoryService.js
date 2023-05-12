const { Category } = require('../models');

const createCategory = async ({ name }) => {
  if (!name) {
    return { status: 400, message: { message: '"name" is required' } };
  }

  const categoryCreated = await Category.create({ name });
  return { status: 201, message: categoryCreated };
};

const getCategories = async () => {
  const allCategories = await Category.findAll();
  return { status: 200, message: allCategories };
};

// const getByUserId = async (userId) => {
//   const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
//   if (!user) {
//     return { status: 404,
//     message: { message: 'User does not exist' } };
//   }
//   return { status: 200, message: user };
// };

module.exports = {
  createCategory,
  getCategories,
};