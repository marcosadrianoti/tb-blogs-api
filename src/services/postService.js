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

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, message: allPosts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) {
    return { status: 404,
    message: { message: 'Post does not exist' } };
  }
  return { status: 200, message: post };
};

const updatePost = async (postId, userId, { title, content }) => {
  if (!title || !content) {
    return { status: 400, message: { message: 'Some required fields are missing' } };
  }
  const [qtUpdated] = await BlogPost.update(
    { title, content },
    { where: { id: postId, userId } },
  );

  if (qtUpdated === 0) return { status: 401, message: { message: 'Unauthorized user' } };

  const postUpdated = await getPostById(postId);

  return { status: 200, message: postUpdated.message };
};

module.exports = {
  insertNewPost,
  getPosts,
  getPostById,
  updatePost,
};