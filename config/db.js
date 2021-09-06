const mysqlJson = require('mysql-json')
var mysqlJson = new mysqlJson({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b7fd61537111ca',
  password: '74cd2cd7',
  database: 'heroku_e8e29ea723b7f04'
})

module.exports = connection 