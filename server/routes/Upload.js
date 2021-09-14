const express = require ('express');
const router = express.Router()

const db = require ("../config/db")


router.post('/', (req, res)=>{
    const title = req.body.title
    const description = req.body.description
    // const image = req.body.image
    const username = req.body.author
 


    db.query(
        "INSERT INTO uploads (title, description, author) VALUES (?, ?, ?); ", 
      [title, description, username],
     (err, results)=>{
         console.log(err);
        res.send(results);
        }
    );
});


    router.get ("/", (req, res)=>{
        db.query("SELECT * FROM uploads ORDER BY id DESC", (err, results)=>{
            if(err) {
                console.log(err)
            }
            res.send(results)
        })
    })



module.exports = router