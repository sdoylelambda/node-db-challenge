const express = require('express');
const server = express();
const helmet = require('helmet')
const projectsRouter = require('../routes/projects/projectsRouter');
const resourcesRouter = require('../routes/resources/resourcesRouter');
const tasksRouter = require('../routes/tasks/tasksRouter')

server.use(helmet());
server.use(express.json());
server.use(('/projects/'), projectsRouter);
server.use('/resources/', resourcesRouter);
server.use('/tasks/', tasksRouter);

server.get('/', (req, res) => {
    res.json({it:'its up'})
});

module.exports = server;