const express = require ('express')
const router = express.Router()
const { Comment } = require('../models')
const cors = require('cors')

//CREATE 
router.post('/post/comment/:idPost', async (req, res) => {
  const id_post = req.post.id
  const id_user = req.user.id
  const content = req.body.content

  //Vérification que le commentaire n'est pas vide

  if(content === undefined || content === ""){
    return res.status(400).send({
      message: "Votre commentaire est vide !"
    })
  }
  else{
    try{
      Comment.create({ id_post, id_user, content})
      res.status(200).send({
        message: "Insertion effectuée"
      })
    }catch(error){
      console.log("Une erreur est surevnue : " + error)
    }
  }
})

//READ
router.get('/post/:idPost', async(req, res) => {
  const comments = await Comment.findAll()

  return res.send(comments)
})

//UPDATE
router.put('/post/:idPost/:id', async (req, res) => {
  const id_post = req.post.id
  const id_user = req.user.id
  const content = req.body.content

  //Vérification que les champs obligatoires sont bien remplis

  if(content === undefined || content === ""){
    res.status(400).send({
      message: "Votre commentaire est vide !"
    })
  }
  else{
    try{
      await Comment.update({ id_post, id_user, content}, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).send({
        message: "Votre commentaire a bien été modifié"
      })
    }catch(error){
      console.log("Une erreur est survenue : " + error)
    }
  }
})

//DELETE
router.delete('/post/:idPost/:id', async (req,res) => {
  try{
    const deleted = await Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    if(deleted){
      res.status(200).send({
        message: "Suppression effectuée"
      })
    }
    else{
      res.status(400).send({
        message: "Suppression impossible : aucune correspondance pour l'id"
      })
    }
  }catch(error){
    console.log("Une erreur est survenue : " + error)
  }
})

module.exports = router