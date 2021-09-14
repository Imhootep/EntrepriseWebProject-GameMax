const express = require ('express');
const router = express.Router()
const { Users } = require("../models");
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async function(username, password, done) {
       // console.log(username);
        let u = await Users.findOne({ where : { username: username }});
        if (!u) {
          return done(null, false, { message: 'Nom d\'utilisateur incorrect' });
        }
  // A MODIF ICI
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
    res.redirect('/user/' + req.user.id);
});

// Logout de l'utilisateur
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router