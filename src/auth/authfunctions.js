const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || '123454321';

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
