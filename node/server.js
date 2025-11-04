const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./models/user')
const bcrypt = require('bcrypt')
const app = express()
const PORT = process.env.PORT || 3000
const DB_URI = `mongodb+srv://techbrains21:techbrains21@cluster0.hnbkmiq.mongodb.net/`

// Register middleware early so routes can use req.body and CORS
app.use(cors({ origin: '*' }))
app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 60000,
            maxPoolSize: 100, // increased for high concurrency
            minPoolSize: 10,
            maxIdleTimeMS: 30000,
            retryWrites: true,
            w: 'majority',
        })
        console.log('✅ MongoDB Connected')
    } catch (error) {
        console.log('😢 MongoDB Connection Error:', error)
    }
}

connectDB()

app.get('/', (req, res) => {
    res.send('Yes this API Works')
})

app.post('/user', async(req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' })
    }

    try {
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ error: 'Email already registered' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new user({ name, email, password: hashedPassword })
        await newUser.save()

        return res.status(201).json({ message: 'User created successfully', userId: newUser.id })
    } catch (error) {
        console.error('Error creating user:', error)
        if (error && error.code === 11000) {
            // duplicate key error
            return res.status(409).json({ error: 'Duplicate key', details: error.keyValue })
        }
        return res.status(500).json({ error: 'Internal server error' })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await user.find({})
        res.json(users)
    } catch (error) {
        console.error('Error fetching users:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.get('/user/:id', async (req, res) => {
    // strip accidental leading ':' if caller included it literally
    let userId = req.params.id

    try {
        // Our schema stores `id` as a string (ObjectId().toString()).
        // So query by the string value instead of constructing an ObjectId.
        const foundUser = await user.findOne({ _id: userId })
        if (!foundUser) return res.status(404).json({ error: 'User not found' })
        return res.status(200).json({ message: 'User fetched successfully', user: foundUser })
    } catch (err) {
        console.error('Error fetching user by id:', err)
        return res.status(500).json({ error: 'Internal server error' })
    }
})

app.delete('/user/:id', async(req, res) => {
    const userId = req.params.id
    
    try {
        const userToDelete = await user.findOneAndDelete({ _id: userId})
        return res.status(200).json({ message: 'User deleted successfully', userToDelete } )
    } catch (error) {
        console.error('Error deleting user:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
})

// app.put('/user/:id', async(req, res) => {
//     const userId = req.params.id

//     try {
        
//     } catch (error) {
//         console.error('Error updating user:', error)
//         res.status
//     }
// })

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`)
})

module.exports = app