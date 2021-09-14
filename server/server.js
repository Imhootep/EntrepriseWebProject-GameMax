let express = require('express')
let session = require('express-session')
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
let app = express()
app.use(passport.initialize());
app.use(passport.session());
let cookieParser = require('cookie-parser')
const cors = require ('cors');


require('dotenv').config({path: './config/.env'})

//Middlewares
app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use('/assets', express.static('public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
/*
app.use((req, res, next) => {
    console.log(req.session)
    console.log(req.user)
    next();
})*/

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

const userRoute = require('./routes/user')
app.use ("/", userRoute);
