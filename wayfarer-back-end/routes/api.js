const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// api/v1/.....

// USER routes-----------------------------------------
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.get('/users/:id', ctrl.users.update);
router.get('/users', ctrl.users.create);
router.get('/users/:id', ctrl.users.update);

// CITY routes-----------------------------------------

// POST routes-----------------------------------------

// COMMENT routes-----------------------------------------

// ------------------------------------------------------
module.exports = router;
