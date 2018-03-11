let http = require('http')
let banner = require('cli-banner')

const onRequest = (request, response) => {
    console.log(banner('Hello world', {}))
    response.writeHead(200, {'content-Type': 'text/plain'})
    response.write('Hello world')
    response.end()
}

let server = http.createServer()
server.on('request', onRequest)

server.listen(1337)