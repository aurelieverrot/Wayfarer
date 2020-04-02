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

// router.get('/cities', ctrl.cities.index);
// router.get('/cities/:id', ctrl.cities.show);
// router.put('/cities/:id, ctrl.cities.update);
// router.post('/cities/', ctrl.cities.create);
// router.delete('/cities/:id', ctrl.cities.destroy);

// POST routes-----------------------------------------

// COMMENT routes-----------------------------------------

// ------------------------------------------------------
module.exports = router;
