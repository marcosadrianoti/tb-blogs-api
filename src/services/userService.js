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

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, message: allUsers };
};

const getByUserId = async (userId) => {
  const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 404,
    message: { message: 'User does not exist' } };
  }
  return { status: 200, message: user };
};

const deleteUserMe = async (userId) => {
  // const post = await getByUserId(userId);
  // if (post.status !== 404) {
    console.log('userId------>', userId);
    await User.destroy(
      { where: { id: userId } },
    );
  //   if (qtDeleted === 0) return { status: 401, message: { message: 'Unauthorized user' } };
  //   return { status: 204, message: {} };
  // }
  return { status: 204, message: {} };
};

module.exports = {
  getForLogin,
  createUser,
  getUsers,
  getByUserId,
  deleteUserMe,
};