const { User } = require('../models');

const DISPLAY_NAME_MSG = { message: '"displayName" length must be at least 8 characters long' };

const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const getByEmail = (email) => User.findOne({ where: { email } });

const getForLogin = (email, password) => User.findOne({ where: { email, password } });

const createUser = async ({ displayName, email, password, image }) => {
  if (displayName.length < 8) {
    return { status: 400, message: DISPLAY_NAME_MSG };
  }
  if (!isEmailValid(email)) {
    return { status: 400, message: { message: '"email" must be a valid email' } };
  }
  if (password.length < 6) {
    return {
      status: 400, message: { message: '"password" length must be at least 6 characters long' },
    };
  }
  const registeredUser = await getByEmail(email);
  if (registeredUser) {
 return { status: 409, message: { message: 'User already registered' },
    };
  }
  
  const userCreated = await User.create({ displayName, email, password, image });
  return { status: 201, message: userCreated };
};

// const getUsers = () => User.findAll();

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  getForLogin,
  createUser,
};