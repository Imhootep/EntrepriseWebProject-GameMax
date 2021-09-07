var mysql  = require('mysql')
var connection = mysql.createPool({
  connectionLimit: 10,
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b7fd61537111ca',
  password: '74cd2cd7',
  database: 'heroku_e8e29ea723b7f04'
})

module.exports = connection 