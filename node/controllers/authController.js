const protect = require('../middleware/jwt')
const express = require('express')
const {randomBytes} = require('crypto')
const jwt = require('jsonwebtoken')
const { User } = require('../models/User')

const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '7d'
    });
}

const generateRefreshToken = () => {
  return randomBytes(64).toString('hex')
};

const registerUser = async(req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({message: "EMail and password are required"})
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({message: "User already exists"})
        }

        const user = await User.create({email, password})

        if (user) {
            const accessToken = generateAccessToken(user._id)
            const refreshToken = generateRefreshToken()

            user.refreshToken = refreshToken
            await user.save()

            res.status(201).json({
                _id: user.id,
                email: user.email,
                accessToken,
                refreshToken,
                message: "Registration successfull"
            })
        } else {
            res.status(400).json({ message: "INvalid User data"})
            console.log("Invalid User Details")
        }
    } catch (error) {
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
        console.log("INTERNAL SERVER ERROR", error)
    }
}
const loginUser = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email})

        if (user && (await user.comparePassword(password))) {
            const accessToken = generateAccessToken(user._id)
            const newRefreshToken = generateRefreshToken()

            user.refreshToken = newRefreshToken
            await user.save()

            res.json({
              _id: user._id,
              email: user.email,
              accessToken,
              refreshToken: newRefreshToken,
              message: 'Login successful. New tokens issued.',
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials.' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
}   
const logoutUser = async(req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId);

        if(userId) {
            user.refreshToken = null
            await user.save()
            res
              .status(200)
              .json({ message: 'Logout successful. Refresh token revoked.' });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Server error during logout.' });
    }
}
const getProfile = async(req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId).select('password refreshToken');

        if (user) {
          return res.status(201).json({
            message: 'Works',
            user,
          });
        } else {
          res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        console.error('Profile retrieval error:', error);
        res
          .status(500)
          .json({ message: 'Server error during profile retrieval.' });
    }
}

module.exports = { getProfile,registerUser, loginUser, logoutUser}