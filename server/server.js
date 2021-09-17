let express = require('express')
let session = require('express-session')
const passport = require('passport')
let app = express()
let flash = require('connect-flash')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
const cors = require ('cors');
require('dotenv').config({path: './config/.env'})

//Middlewares
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'codeforgeek',
    saveUninitialized: true,
    resave: true
}));
app.use(express.json())
app.use(flash())



//Listening port definition
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

//Routes
const userRoute = require('./routes/userRoute')
app.use ("/", userRoute);
const commentRoute = require('./routes/commentRoute')
app.use("/", commentRoute);
const uploadRoute = require('./routes/uploadRoute')
app.use("/", uploadRoute);
