const app = require('./src/server')

const PORT = 1236

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
app.get('/', (req, res) => {
  res.send('<h1 style="color:#FFC7EA; font-size:150px">Hello films!</h1>')
})

module.exports = app
