let express = require('express')
let session = require('express-session')
var passport = require('passport')
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

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

const userRoute = require('./routes/user')
app.use ("/", userRoute);