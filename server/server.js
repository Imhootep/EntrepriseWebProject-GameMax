const {response, request} = require('express')
let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
let { Sequelize } = require('sequelize')
let sequelize = require('./config/db')

require('dotenv').config({path: './config/.env'})

//Moteur de template
app.set('view engine', 'ejs')

//Middlewares
app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.post('/register', (req, res)=>{
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const phone = req.body.phone
  const rue = req.body.rue
  const number = req.body.number
  const box = req.body.box
  const cp = req.body.cp
  const commune = req.body.commune
  const social = req.body.social
  const website = req.body.website
  const member = req.body.member
  const games = req.body.games
  const comment = req.body.comment


  sequelize.query(
      "INSERT INTO Users (username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ", 
    [username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment],
   (err, results)=>{
       console.log(err);
      res.send(results);
      }
  );
});


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})


/* 

const express = require ('express');
const app = express ();
const cors = require ('cors');

app.use(cors())
app.use(express.json())

const userRoute = require('./routes/User')
app.use ("/User", userRoute);

app.listen(3001, (req, res) =>{
    console.log('server running...');
})

*/