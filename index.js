const port = 5750
const server = require('./api/server')

server.listen(port, () => console.log(`***\n The server is running on port ${port}***\n`))