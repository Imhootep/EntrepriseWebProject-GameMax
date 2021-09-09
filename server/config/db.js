const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  database : 'social-média'
});


module.exports =db