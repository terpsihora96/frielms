const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChoiceSchema = new Schema(
    {
        name: { type: String, required: true },
        films: { type: [String] },
    }
)

module.exports = mongoose.model('choices', ChoiceSchema)
