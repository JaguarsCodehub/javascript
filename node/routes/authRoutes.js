const express = require('express')
const { registerUser, loginUser, getProfile, logoutUser } = require('../controllers/authController')
const authRoutes = express.Router();

const protect = require('../middleware/jwt')
// authRoutes.use('');
authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);
authRoutes.post('/logout', protect, logoutUser);
authRoutes.get('/getProfile', protect, getProfile);

module.exports = authRoutes

