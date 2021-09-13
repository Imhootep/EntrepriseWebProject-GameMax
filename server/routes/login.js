const express = require ('express');
const router = express.Router()
const { Users } = require("../models");
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async function(username, password, done) {
        console.log("1")
        await Users.findOne({ where : { username: username }}, function (err, user) {
        console.log("2")
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Nom d\'utilisateur incorrect' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Mot de passe incorrect' });
        }
        return done(null, user);
      });
    }
));

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })               
);


/*
router.post('/login', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM Users WHERE username =? ", 
      username,
     (err, results)=>{
         if(err){
             console.log(err);
         }
         if (results) {
             console.log(results[0])
             if (password == results[0].password) {
                 res.send("You are logged in!")
             } else {
                 res.send("Wrong username / password combo")
             }
         } else {
             res.send("User doesn't exist!!!")
         }
             
        }
    )
});
*/

module.exports = router