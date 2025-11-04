// const mongoose = require('mongoose')

// const User = new mongoose.Schema({
//     // Generate a stable unique id for the user document. We could rely on
//     // MongoDB's `_id`, but keeping a separate `id` string can be convenient.
//     // Use ObjectId string as a default to avoid inserting `null` which would
//     // cause duplicate-key errors on a unique index.
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// })

// module.exports = mongoose.model('user', User)


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User

// Query examples:
User.find({ age: {$gt: 21}})
    .then(users => console.log(users))
    .catch(err => console.error(err))

User.updateMany(
    { age: { $lt: 20 } }, // Filter: where age is less than 20
    { $set: { isActive: false } } // Update: set isActive to false
).then(result => {
    console.log(`Updated ${result.modifiedCount} documents.`);
})
