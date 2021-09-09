const {response, request} = require('express')
let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
const cors = require ('cors');

require('dotenv').config({path: './config/.env'})

//Moteur de template
app.set('view engine', 'ejs')

//Middlewares
app.use(cors())
app.use(express.json())
app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
/*
app.post('/user/register', (req, res)=>{

  console.log('Hey')

  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const phone = req.body.phone
  const street = req.body.street
  const number = req.body.number
  const box = req.body.box
  const cp = req.body.cp
  const commune = req.body.commune
  const social = req.body.social
  const website = req.body.website
  const member = req.body.member
  const games = req.body.games
  const comment = req.body.comment
    
  Users.query(
      "INSERT INTO users (username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ", 
    [username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment],
   (err, results)=>{
       console.log(err);
      res.send(results);
      }
  );
});
*/

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

const userRoute = require('./routes/user')
app.use ("/", userRoute);