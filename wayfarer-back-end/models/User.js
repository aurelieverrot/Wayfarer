const mongoose = require('mongoose');
const Post = require('./Post');
const Comment = require('./Comment');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    photo: String,
    posts: [Post.schema],
    comments: [Comment.schema]
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);