const express = require("express");
const router = express.Router();
const axios = require("axios");
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const queryText = 'SELECT * FROM "tags";';
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log(`error on GET query ${error}`);
    });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM projects WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((response) => {
            console.log(`server response: ${response}`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Problem with delete ${error}`);
            res.sendStatus(500);
        })

});

router.post("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
