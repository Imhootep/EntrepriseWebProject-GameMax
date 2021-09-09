<<<<<<< HEAD
let { Sequelize } = require('sequelize')

const sequelize = new Sequelize('heroku_e8e29ea723b7f04', 'b7fd61537111ca', '74cd2cd7', {
    host: 'eu-cdbr-west-01.cleardb.com',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize
=======
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  database : 'social-média'
});


module.exports =db
>>>>>>> 6828ab4872b238ff24af968aa16b9bc14381a2c9
