const {response, request} = require('express')
let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
let Actor = require('./entities/actor')
let ModelActor = require('./models/modelActor')

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

var test = new Actor("test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test")
ModelActor.create(test, (error, response) => {
  if(error) throw error
})


app.listen(5000,(err, res) =>{
  if(err) throw err
  console.log("Server is now working on port 5000")
})