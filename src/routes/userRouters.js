const express = require('express');

const validateJwt = require('../middlewares/tokenValidation');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/user', userController.createUser);

userRouter.get('/user', validateJwt, userController.getUsers);

userRouter.get('/user/:id', validateJwt, userController.getByUserId);

userRouter.delete('/user/me', validateJwt, userController.deleteUserMe);

module.exports = userRouter;
