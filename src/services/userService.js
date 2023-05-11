// const bcrypt = require('bcryptjs');
const { User } = require('../models');

// const createUser = ({ username, password }) => User.create({ username, password });
  // const salt = bcrypt.genSaltSync(5);
  // const encryptedPassword = bcrypt.hashSync(password, salt);
  // return User.create({ username, password});
// }

// const getUsers = () => User.findAll();

// const getByUsername = (username) => User.findOne({ where: { username } });

const getForLogin = (email, password) => User.findOne({ where: { email, password } });

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  getForLogin,
};