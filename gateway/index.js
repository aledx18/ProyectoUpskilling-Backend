const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(morgan('dev'))

app.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://characters:8001',
    changeOrigin: true
  })
)

app.use(
  '/planets',
  createProxyMiddleware({
    target: 'http://planets:1235',
    changeOrigin: true
  })
)

app.use(
  '/films',
  createProxyMiddleware({
    target: 'http://films:1236',
    changeOrigin: true
  })
)

app.listen(8000, () => {
  console.log('Express server is listening on port 8000')
})
