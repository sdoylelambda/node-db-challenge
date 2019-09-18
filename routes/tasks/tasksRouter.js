const express = require('express');
const router = express.Router();

const db = require('../../api/db-config')

router.get('/', (req, res) => {
    db('tasks')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => res.status(400).json({ err: err.message }))
});

router.post('/', (req, res) => {
    const newPost = req.body;
    db('tasks').insert(newPost)
    .then(post => res.status(200).json({ post: newPost[0] }))
    .catch(err => res.status(200).json({ err: err.message }))
});


module.exports = router