const mongoose = require('mongoose');
const Comment = require('./Comment');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
    },
    body: {
        type: String,
        required: true,
    },
    comments: [Comment.schema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);