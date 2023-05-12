const express = require('express');

const validateJwt = require('../middlewares/tokenValidation');

const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/categories', validateJwt, categoryController.createCategory);

// categoryRouter.get('/user', validateJwt, categoryController.getUsers);

// categoryRouter.get('/user/:id', validateJwt, categoryController.getByUserId);

module.exports = categoryRouter;
