const express = require('express');
const server = express();
const helmet = require('helmet')

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({it:'its up'})
});

module.exports = server;