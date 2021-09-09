const express = require ('express');
const router = express.Router()

const db = require ("../config/db")


router.post('/register', (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone
    const rue = req.body.rue
    const number = req.body.number
    const box = req.body.box
    const cp = req.body.cp
    const commune = req.body.commune
    const social = req.body.social
    const website = req.body.website
    const member = req.body.member
    const games = req.body.games
    const comment = req.body.comment


    db.query(
        "INSERT INTO Users (username, password, email, phone, rue, number, box, cp, commune, social, website, member, games, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ", 
      [username, password, email, phone, rue, number, box, cp, commune, social, website, member, games, comment],
     (err, results)=>{
         console.log(err);
        res.send(results);
        }
    );
});

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

module.exports = router