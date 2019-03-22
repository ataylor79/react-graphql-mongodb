import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    like: {
        type: Number,
        default: 0,
    },
    username: {
        type: String,
    },
})

module.exports = mongoose.model('Recipe', recipeSchema)
