const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(require('./routes'))

app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }))

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = app
