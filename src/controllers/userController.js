const { createToken } = require('../auth/authfunctions');
const UserService = require('../services/userService');

const createUser = async (req, res) => {
    const userData = req.body;

    const user = await UserService.createUser(userData);
    
    if (user.status !== 201) {
      return res.status(user.status).json(user.message);
    }

    const { password: _password, ...userWithoutPassword } = userData;

    const token = createToken(userWithoutPassword);

    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await UserService.getUsers();
  return res.status(users.status).json(users.message);
};

const getByUserId = async (req, res) => {
  const userId = req.params.id;
  const user = await UserService.getByUserId(userId);
  if (user.status !== 200) {
    return res.status(user.status).json(user.message);
  }
  return res.status(200).json(user.message);
};

module.exports = {
  createUser,
  getUsers,
  getByUserId,
};
