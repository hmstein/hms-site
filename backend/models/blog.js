const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('Blog', blogSchema)