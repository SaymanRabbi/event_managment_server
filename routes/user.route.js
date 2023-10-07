const express = require('express');
const { CreateUserControler,LoginUserControler } = require('../controllers/userControler');
const router = express.Router();
router.post('/create',CreateUserControler)
router.post('/login',LoginUserControler)

module.exports = router;