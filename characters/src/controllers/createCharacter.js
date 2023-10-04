const { response } = require('../utils')

module.exports = (req, res) => {
  response(res, 200, 'create characters')
}
