const express = require ('express');
const router = express.Router()
const db = require ("../config/db")
const sequelize = require('sequelize')
const { Users } = require("../models");
const cors = require('cors')

router.post('/user/register', async (req, res)=>{

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
 
    await Users.create({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment });
    (err, res)=>{
        console.log(err);
        res.status(200).json({
            text: "Création effectuée avec succès",
          });
       }
});

router.get('/user/:id', async (req,res) => {

    const user = await Users.findByPk(req.params.id)
    
    if (!user) {
        return res.status(400).send({
            message: "Utilisateur introuvable"
        })
    } else {
        res.status(200).send({
            message: "Utilisateur trouvé"
        })
        return res.send(user)
    }
})

router.put('/user/register', async (req, res)=>{

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
 
    await Users.update({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment });
    (err, res)=>{
        console.log(err);
        res.status(200).json({
            text: "Modification effectuée avec succès",
          });
       }
});

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