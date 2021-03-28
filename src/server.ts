import express from 'express'
const server = express()

const port = process.env.PORT || 8080

server.listen(port, function () {
	console.log('Listening on port', port)
})
