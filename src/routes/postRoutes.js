const express = require('express');

const validateJwt = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', validateJwt, postController.insertNewPost);

// categoryRouter.get('/categories', validateJwt, categoryController.getCategories);

// categoryRouter.get('/categories/:id', validateJwt, categoryController.getByUserId);

module.exports = postRouter;
