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

router.post('/', (req, res) => {
    const addProject = req.body;
    const queryText = `INSERT INTO "projects" ("title", "description", 
                     "date_completed", "github", "tag_id", "website")                   
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
        addProject.title,
        addProject.description,
        addProject.date_completed,
        addProject.github,
        addProject.tag,
        addProject.website,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('error in post', error);
            res.sendStatus(500);
        });
});

module.exports = router;
