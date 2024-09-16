const express = require('express');
const router = express.Router();

const db = require('../../api/db-config')

router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => res.status(400).json({ err: err.message }))
});

router.post('/', (req, res) => {
    const newProject = req.body;
    db('projects').insert(newProject)
        .then(projects => {
            res.status(200).json({ created: newProject[0] })
        })
        .catch(err => res.status(400).json({ err: err.message }))
});


module.exports = router