const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating schema and model
const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        films: { type: [String] },
    }
)

module.exports = mongoose.model('users', UserSchema)
