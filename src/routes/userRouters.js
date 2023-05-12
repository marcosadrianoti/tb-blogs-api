const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/user', userController.createUser);

userRouter.get('/user', userController.getUsers);

userRouter.get('/user/:id', userController.getByUserId);

module.exports = userRouter;
