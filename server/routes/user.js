const express = require ('express');
const router = express.Router()
const db = require ("../config/db")
const sequelize = require('sequelize')
const { Users } = require("../models");
const cors = require('cors')

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
            Users.create({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment })
            res.status(200).send({
                message: "Insertion effectuée"
            })
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
        }
    }
});

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
            await Users.update({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment }, {
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

router.delete('/user/:id', async (req,res) => {

        try{
        await Users.destroy({
            where: {
                id: req.params.id
            }
        });
            res.status(200).send({
                message: "Suppression effectuée"
            })
        } catch (error) {
            console.log("Une erreur est surevenue : " + error)
    }
})
module.exports = router