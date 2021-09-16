const express = require ('express');
const router = express.Router()
const { Users } = require("../models");
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;    
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const PUB_KEY = fs.readFileSync(__dirname + '/jwtRS256.key.pub', 'utf8');
const PRIV_KEY = fs.readFileSync(__dirname + '/jwtRS256.key', 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY
  };

passport.use(new LocalStrategy(
    async function(username, password, done) {
       // console.log(username);
        let u = await Users.findOne({ where : { username: username }});
        if (!u) {
          return done(null, false, { message: 'Nom d\'utilisateur incorrect' });
        }
        bcrypt.compare(password, u.password, function(err, res) {
            if (err) return cb(err);
            if (res === false) {
                return done(null, false, { message: 'Mot de passe incorrect' });
            } else {
                return done(null, u);
            }
        });
    }
));

passport.use(new JwtStrategy(options, async function(jwt_payload, done) {
    // We will assign the `sub` property on the JWT to the database ID of user
    await Users.findByPk({ id : jwt_payload.sub }, function(err, user) {    
        console.log("id : "+jwt_payload.sub)   
        // This flow look familiar?  It is the same as when we implemented
        // the `passport-local` strategy
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }  
    });
}));
  
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
 
    Users.findByPk(id).then(function(user) {
        if (user) {
            done(null, user);
        } else {
            done(user.errors, null);
        }
    });
});

// Inscription de l'utilisateur
router.post('/user/register', async (req, res)=>{

    flag = 1;
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
 
 //Vérification que les champs obligatoires sont bien remplis
    var champsObligatoires = []
    champsObligatoires.push(username, password, email, phone, street, number, cp, commune, member)
    champsObligatoires.forEach(function(item, index) {
     if(!item){    
     flag = 0
     }
 })
    if(flag == 0){
        return res.status(400).send({
            message: "Un ou plusieurs champs obligatoires sont manquants"
        })
    }
    else{            
        try {                   
            await Users.create({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment })    
            res.status(200).send({
                message: "Insertion effectuée"
            })
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
            }                    
    }
})

// Données d'un utilisateur sur base de son ID
router.get('/user/:id', async (req,res) => {

    const user = await Users.findByPk(req.params.id)
    
    if (!user) {
        return res.status(400).send({
            message: "Utilisateur introuvable"
        })
    } else {
        return res.send(user)
    }
})

// Modification d'un utilisateur sur base de son ID
router.put('/user/:id', async (req, res)=>{

    flag=1
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
 

    var champsObligatoires = []
    champsObligatoires.push(username, password, email, phone, street, number, cp, commune, member)
    champsObligatoires.forEach(function(item, index) {
    if(!item){    
     flag = 0
     }
 })
    if(flag == 0){
        res.status(400).send({
            message: "Un ou plusieurs champs obligatoires sont manquants"
        })
    }
    else{
        try {
            let user = await Users.findByPk(req.params.id)
            user.update({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment }, {
                where: {
                  id: req.params.id
                }
            });
            res.status(200).send({
                message: "Modification effectuée"
            })
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
        }
    }
});

// Suppression d'un utilisateur sur base de son ID
router.delete('/user/:id', async (req,res) => {

        try{
        const deleted = await Users.destroy({
            where: {
                id: req.params.id
            }
        });
        if(deleted){
            res.status(200).send({
                message: "Suppression effectuée"
            })
        } else {
            res.status(400).send({
                message: "Suppression impossible : l'ID ne correspond pas à un utilisateur"
            })
        }          
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
    }
})

// Login de l'utilisateur
router.post('/login', passport.authenticate('local'), function(req, res) {  
    const signedJWT = jwt.sign(req.user.toJSON(), PRIV_KEY, { algorithm: 'RS256'})/*,(err, token) => {
        if(err) { console.log(err) }    
        res.send(token);
    });;  */
    jwt.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {
        if (err === 'TokenExpiredError') {
            console.log('Whoops, your token has expired!');
        }
        
        if (err === 'JsonWebTokenError') {
            console.log('That JWT is malformed!');
        }
        
        if (err === null) {
            console.log('Your JWT was successfully validated!');
        }       
        res.send(payload)
    });
})
// Vérifier si on a accès a une route protégée une fois que l'identification et token marcheront
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
        //verify the JWT token generated for the user
        console.log("Go sur la page protected !")
        jwt.verify(req.token, PRIV_KEY, (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
});

// Logout de l'utilisateur
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router