const { BlogPost, PostCategory, Category, sequelize, User } = require('../models');

const areThereCategory = async (categoryIds) => {
  const promises = categoryIds.map(async (categoryId) => {
    const thereIs = await Category.findByPk(categoryId);
    return !!thereIs;
  });
  const teste = await Promise.all(promises);
  return (teste.includes(false));
};
const areFields = (title, content, userId, categoryIds) => {
  if (!title || !content || !userId || !categoryIds) {
    return false;
  }
};

const insertNewPost = async ({ title, content, userId, categoryIds }) => {
  if (await areThereCategory(categoryIds) === true) {
    return { status: 400, message: { message: 'one or more "categoryIds" not found' } };
  }
  if (areFields(title, content, userId, categoryIds) === false) {
    return { status: 400, message: { message: 'Some required fields are missing' } };
  }
  const result = await sequelize.transaction(async (t) => {
    const blogPost = await BlogPost.create({
      title, content, userId,
    }, { transaction: t });
    const promises = categoryIds.map(async (categoryId) => {
      await PostCategory.create({ categoryId, postId: blogPost.id }, { transaction: t });
    });
    await Promise.all(promises);
    return blogPost;
  });
  return { status: 201, message: result };
};

// const createCategory = async ({ name }) => {
//   if (!name) {
//     return { status: 400, message: { message: '"name" is required' } };
//   }

//   const categoryCreated = await Category.create({ name });
//   return { status: 201, message: categoryCreated };
// };

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, message: allPosts };
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
  insertNewPost,
  getPosts,
};