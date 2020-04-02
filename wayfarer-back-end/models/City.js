const mongoose = require('mongoose');
const Post = require('./Post');
const Comment = require('./Comment');

const CitySchema = new mongoose.Schema({
    name: String,
    photo: String,
    posts: [Post.schema],
    comments: [Comment.schema]
}, {timestamps: true});

module.exports = mongoose.model('City', CitySchema);