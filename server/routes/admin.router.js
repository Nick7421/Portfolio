const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.post('/',(req,res) =>{
    res.sendStatus(200)
})






module.exports = router;