const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')

// post /api/users
router.post('/', usersCtrl.create);

module.exports = router;