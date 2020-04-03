const db = require('../models');

const index = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find all posts.' });

        res.json(foundPosts);
    });
};

const show = (req, res) => {
    db.Post.findById(req.params.postId, (err, foundPost) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find a post by id.' });

        res.json(foundPost);
    });
};

// !!!!!!!!!!!! NEED TO TEST !!!!!!!!!!!!
const update = (req, res) => {
    db.City.findById(req.params.cityId, (err, foundCity) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find a city by id to update a post.' });

        const postToUpdateInCity = foundCity.posts.id(req.params.postId);
        if (!postToUpdateInCity) {
            return res.status(404).json({ status: 404, error: 'Cannot find a postToUpdateInCity in the city.' });
        };

        postToUpdateInCity.body = req.body.body;
        foundCity.save((err, savedCity) => {
            if (err) return res.status(404).json({ status: 404, error: 'Cannot save a city with an updated post.' });

            db.Post.findByIdAndUpdate(req.params.postId, (err, updatedPost) => {
                if (err) return res.status(404).json({ status: 404, error: 'Cannot update a post.' });

                db.User.findById(updatedPost.user._id, (err, foundUser) => {
                    if (err) return res.status(404).json({ status: 404, error: 'Cannot find a user to update a post.' });

                    const postToUpdateInUser = foundUser.posts.id(updatedPost._id);
                    if (!postToUpdateInUser) return res.status(404).json({ status: 404, error: 'Cannot find a postToUpdateInUser in the user.' });

                    postToUpdateInUser.body = req.body.body;

                    foundUser.save((err, savedUser) => {
                        if (err) return res.status(404).json({ status: 404, error: 'Cannot save a user with an updated post.' });

                        res.json(updatedPost);
                    });
                });
            });
        });
    });
};

// !!!!!!!!!!!! NEED TO TEST !!!!!!!!!!!!
const create = (req, res) => {
    db.Post.create(req.body, (err, newPost) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot create a post.' });

        db.City.findById(req.params.cityId, (err, foundCity) => {
            if (err) return res.status(404).json({ status: 404, error: 'Cannot find a city to create a post.' });

            foundCity.posts.push(newPost);
            foundCity.save((err, savedCity) => {
                if (err) return res.status(404).json({ status: 404, error: 'Cannot save a post in the city.' });

                db.User.findById(req.session.currentUser._id, (err, founUser) => {
                    if (err) return res.status(404).json({ status: 404, error: 'Cannot find a user to create a post.' });
    
                    foundUser.posts.push(newPost);
                    foundUser.save((err, savedUser) => {
                        if (err) return res.status(404).json({ status: 404, error: 'Cannot save a post in the user.' });
    
                        res.json(newPost);
                    });
                });
            });
        });
    });
};

const destroy = (req, res) => {
};

module.exports = {
    index,
    show,
    update,
    create,
    destroy
};