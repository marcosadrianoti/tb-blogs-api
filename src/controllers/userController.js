const { createToken } = require('../auth/authfunctions');
const UserService = require('../services/userService');

const createUser = async (req, res) => {
    const userData = req.body;

    const user = await UserService.createUser(userData);

    console.log('user', user);
    const { password: _password, ...userWithoutPassword } = userData;

    const token = createToken(userWithoutPassword);

    return res.status(201).json({ token });
};

module.exports = { createUser };
