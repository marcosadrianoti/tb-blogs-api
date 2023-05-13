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
  const post = await postService.getPostById(id);
  if (post.status !== 200) {
    return res.status(post.status).json(post.message);
  }
  return res.status(200).json(post.message);
};

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { id } = req.payload.data;
  const dataBody = req.body;
  const updatedPost = await postService.updatePost(postId, id, dataBody);
  return res.status(updatedPost.status).json(updatedPost.message);
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { id } = req.payload.data;
  const deletedPost = await postService.deletePost(postId, id);
  return res.status(deletedPost.status).json(deletedPost.message);
};

module.exports = {
  insertNewPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
