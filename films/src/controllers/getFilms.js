const film = require('../db')
const { response } = require('../utils')

// module.exports = async (req, res) => {')

module.exports = async (req, res) => {
  const films = await film.list()
  response(res, 200, films)
}
