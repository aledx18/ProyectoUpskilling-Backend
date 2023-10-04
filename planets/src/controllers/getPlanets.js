const planets = require('../db')
const { response } = require('../utils')

// module.exports = async (req, res) => {')

module.exports = async (req, res) => {
  const planet = await planets.list()
  response(res, 200, planet)
}
