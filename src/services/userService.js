// const bcrypt = require('bcryptjs');
const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => {
  const userCreated = User.create({ displayName, email, password, image });
  return { status: 201, message: userCreated };
};
  // const salt = bcrypt.genSaltSync(5);
  // const encryptedPassword = bcrypt.hashSync(password, salt);
//   return User.create({ displayName, email, password, image});
// }

// const getUsers = () => User.findAll();

// const getByUsername = (username) => User.findOne({ where: { username } });

const getForLogin = (email, password) => User.findOne({ where: { email, password } });

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  getForLogin,
  createUser,
};