let express = require('express')
let session = require('express-session')
const passport = require('passport')
let app = express()
let cookieParser = require('cookie-parser')
const cors = require ('cors');
require('dotenv').config({path: './config/.env'})

//Middlewares
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())
app.use(express.json())
app.use('/assets', express.static('public')); 

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

const userRoute = require('./routes/userRoute')
app.use ("/", userRoute);
app.get('*', function(req, res,next){
    res.locals.user = req.user || null;
    next();
})
// const postRoute = require('./routes/postRoute')
// app.use("/", postRoute);
const commentRoute = require('./routes/commentRoute')
app.use("/", commentRoute);
const uploadRoute = require('./routes/uploadRoute')
app.use("/", uploadRoute);
