const dotenv = require('dotenv')
const express = require('express')
const {User} = require('./models/User')
const authRoutes = require('./routes/authRoutes.js');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const DB_URI = `mongodb+srv://techbrains21:techbrains21@cluster0.hnbkmiq.mongodb.net/`;

const app = express()
app.use(express.json())

const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log("MongoDB COnnected")
    } catch (error) {
        console.error("MongoDB connection issue", error)
    }
}

connectDB()


app.get('/', (req, res) => {
    res.status(200).json({ message: "Yes this works"})
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server listenning on PORT: ${PORT}`)
})