const mongoose = require('mongoose');
const User = require('./User');
const Comment = require('./Comment');
const City = require('./City');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [Comment.schema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: City
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);