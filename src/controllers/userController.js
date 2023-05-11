const { createToken } = require('../auth/authfunctions');
const UserService = require('../services/userService');

const createUser = async (req, res) => {
    const userData = req.body;

    const user = await UserService.createUser(userData);
    
    if (user.status !== 201) {
      console.log('user------Entrou-------', user.message);
      return res.status(user.status).json(user.message);
    }

    const { password: _password, ...userWithoutPassword } = userData;

    const token = createToken(userWithoutPassword);

    return res.status(201).json({ token });
};

module.exports = { createUser };
