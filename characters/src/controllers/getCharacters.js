const characters = require('../db')
const { response } = require('../utils')

// module.exports = async (req, res) => {')

module.exports = async (req, res) => {
  const personajes = await characters.list()
  response(res, 200, personajes)
}
