const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./result.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})