let http = require('http')

const onRequest = (request, response) => {
    response.writeHead(200, {'content-Type': 'text/plain'})
    response.write('Hello world')
    response.end()
}

let server = http.createServer()
server.on('request', onRequest)

server.listen(1337)