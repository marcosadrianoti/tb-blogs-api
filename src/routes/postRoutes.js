const express = require('express');

const validateJwt = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', validateJwt, postController.insertNewPost);

postRouter.get('/post', validateJwt, postController.getPosts);

// categoryRouter.get('/categories', validateJwt, categoryController.getCategories);

postRouter.get('/post/:id', validateJwt, postController.getPostById);

module.exports = postRouter;
