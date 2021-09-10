const express = require ('express');
const router = express.Router()

const db = require ("../config/db")
const sequelize = require('sequelize')
const { Users } = require("../models")

//Create a user
router.post('/user/register', (req, res)=>{
    var flag = 1
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
    if(flag == 0)console.log("Un ou plusieurs champs n'ont pas été remplis\nLa création n'a pas été effectuée")
    else{
        try {
            Users.create({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment })
            res.redirect('/login')
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
        }
    }
});
module.exports = router