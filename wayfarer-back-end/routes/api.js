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

// CITY routes-----------------------------------------

// POST routes-----------------------------------------

// COMMENT routes-----------------------------------------

// ------------------------------------------------------
module.exports = router;
