const {response, request} = require('express')
let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
let Actor = require('./entities/actor')
let ModelActor = require('./models/modelActor')

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

app.post('/register', (request, response) => {


})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})