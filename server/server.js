const server = require('./app')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  
  server.all('*', (req, res) => {
    return handle( req, res )
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Сервер запуще на порте ---> ${port}`)
  })
})

/*

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

*/