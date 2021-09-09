const express = require ('express');
const router = express.Router()

const db = require ("../config/db")
const sequelize = require('sequelize')
const { Users } = require("../models")

//Create a user
router.post('/user/register', (req, res)=>{
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
    Users.create({ username, password, email, phone, street, number, box, cp, commune, social, website, member, games, comment })
});


//Update a user
router.put('/user/', (req,res) => {
    let user = req.body
    
})
module.exports = router