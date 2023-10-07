const express = require('express');
const { creteEvenetControler,getEvenetControler } = require('../controllers/eventControler');
const router = express.Router();
/**
 * event route
 */
router.post('/create',creteEvenetControler)
router.get('/getEvent',getEvenetControler)

module.exports = router;