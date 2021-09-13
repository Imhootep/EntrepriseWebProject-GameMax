let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
const cors = require ('cors');
var passport = require('passport')

require('dotenv').config({path: './config/.env'})

//Moteur de template
app.set('view engine', 'ejs')

//Middlewares
app.use(cookieParser());
app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session());
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

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

const userRoute = require('./routes/user')
app.use ("/", userRoute);
const loginRoute = require('./routes/login')
app.use ("/", loginRoute);
