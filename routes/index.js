const express = require('express');

const router = express.Router();

// default 
router.get('/', (req, res) => res.render('welcome'));

module.exports = router;