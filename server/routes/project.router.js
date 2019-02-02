const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.get('/',(req,res) => {
    const queryText = 'SELECT * FROM "projects";';
    pool.query(queryText)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch( (error) =>{
            console.log(`error on GET query ${error}`);
        })
});








module.exports = router;