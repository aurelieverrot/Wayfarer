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
// router.get('/verify', ctrl.auth.verify);

// CITY routes-----------------------------------------

// POST routes-----------------------------------------
router.get('/posts', ctrl.posts.index);
router.get('/posts/:postId', ctrl.posts.show);
router.put('/cities/:cityId/posts/:postId', ctrl.posts.update); // <------------------------
router.post('/cities/:cityId/posts/', ctrl.posts.create);
router.delete('/posts/:postId', ctrl.posts.destroy);



// COMMENT routes-----------------------------------------

// ------------------------------------------------------
module.exports = router;
