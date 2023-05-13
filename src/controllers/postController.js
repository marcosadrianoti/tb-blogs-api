const postService = require('../services/postService');

const insertNewPost = async (req, res) => {
    const postData = req.body;
    postData.userId = req.payload.data.id;

    const blogPost = await postService.insertNewPost(postData);
    
    if (blogPost.status !== 201) {
      return res.status(blogPost.status).json(blogPost.message);
    }

    return res.status(201).json(blogPost.message);
};

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  return res.status(posts.status).json(posts.message);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const user = await postService.getPostById(id);
  if (user.status !== 200) {
    return res.status(user.status).json(user.message);
  }
  return res.status(200).json(user.message);
};

module.exports = {
  insertNewPost,
  getPosts,
  getPostById,
};
