const express = require('express');

const validateJwt = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.get('/post/search', validateJwt, postController.searchPosts);

postRouter.post('/post', validateJwt, postController.insertNewPost);

postRouter.get('/post', validateJwt, postController.getPosts);

postRouter.get('/post/:id', validateJwt, postController.getPostById);

postRouter.put('/post/:id', validateJwt, postController.updatePost);

postRouter.delete('/post/:id', validateJwt, postController.deletePost);

module.exports = postRouter;
