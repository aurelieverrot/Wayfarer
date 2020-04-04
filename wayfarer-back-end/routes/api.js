const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// api/v1/.....

// USER routes-----------------------------------------
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.put('/users/:id', ctrl.users.update);
router.post('/users', ctrl.users.create);
router.delete('/users/:id', ctrl.users.destroy);

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.delete('/logout', ctrl.auth.logout);

    // We might need this one to check if this user is logged in
router.get('/verify', ctrl.auth.verify);

// CITY routes------------------------------------
router.get('/cities', ctrl.cities.index);
router.get('/cities/:cityId', ctrl.cities.show);
//  Shouldn't be used by User
// -----------------------------------------------
// router.put('/cities/:cityId, ctrl.cities.update);
// router.post('/cities/', ctrl.cities.create);
// router.delete('/cities/:cityId', ctrl.cities.destroy);


// POST routes-----------------------------------------
router.get('/posts', ctrl.posts.index);
router.get('/posts/:postId', ctrl.posts.show);
router.put('/posts/:postId', ctrl.posts.update); // <------------------------
router.post('/posts/', ctrl.posts.create);
router.delete('/posts/:postId', ctrl.posts.destroy);



// COMMENT routes----------------------------------
router.get('/cities/:cityId/posts/:postId/comments', ctrl.comments.index);
router.get('/cities/:cityId/posts/:postId/comments/:commentId', ctrl.comments.show);
router.put('/cities/:cityId/posts/:postId/comments/:commentId', ctrl.comments.update);
router.post('/cities/:cityId/posts/:postId/comments', ctrl.comments.create);
router.delete('/cities/:cityId/posts/:postId/comments/commentId', ctrl.comments.destroy);


// ------------------------------------------------
module.exports = router;
