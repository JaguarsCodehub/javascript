const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
    let token;

    const authHeader = req.headers.authorization

    if (authHeader && authHeader.startsWith('Bearer')) {
        try {
            token = authHeader.split(' ')[1]

            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            req.userId = decoded.id
        } catch (error) {
            console.log("JWT MIDDLEWARE ERROR", error)
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
}

module.exports = protect