const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({it:'its up'})
});

router.post('/', (req, res) => {
    
});


module.exports = router