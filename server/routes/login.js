const express = require ('express');
const router = express.Router()
const { Users } = require("../models");
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
    

passport.use(new LocalStrategy(
  async function(username, password, done) {
     // console.log(username);
      let u = await Users.findOne({ where : { username: username }});
      if (!u) {
        return done(null, false, { message: 'Nom d\'utilisateur incorrect' });
      }

      if (password !== u.password) {
        return done(null, false, { message: 'Mot de passe incorrect' });
      }
      return done(null, u);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    Users.findByPk(id, function(err, user) {
      done(err, user);
    });
  });

router.post('/login', passport.authenticate('local'), function(req, res) {                         
                                    res.redirect('/user/' + req.user.id);
                                  });

                                  
module.exports = router