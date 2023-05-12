const postService = require('../services/postService');

const insertNewPost = async (req, res) => {
    const postData = req.body;
    postData.userId = req.payload.data.userId;
    // console.log('postData --------->', postData);
    // console.log('req.payload.data.id--->', req.payload.data.id);

    const blogPost = await postService.insertNewPost(postData);
    
    if (blogPost.status !== 201) {
      return res.status(blogPost.status).json(blogPost.message);
    }

    return res.status(201).json(blogPost.message);
};

// const getCategories = async (req, res) => {
//   const categories = await CategoryService.getCategories();
//   return res.status(categories.status).json(categories.message);
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
  insertNewPost,
};
