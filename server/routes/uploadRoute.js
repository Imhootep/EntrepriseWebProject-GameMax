const express = require ('express')
const router = express.Router()
const { Upload, sequelize } = require('../models')
const cors = require('cors')

//CREATE 
router.post('/upload', async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const author = req.body.author

  //Vérification que le titre/description n'est pas vide

  if(title === undefined || title === ""){
    return res.status(400).send({
      message: "Le titre est vide !"
    })
  }
  else if(description === undefined || description === ""){
    return res.status(400).send({
      message: "La description du post est vide !"
    })
  }
  else{
    try{
      Upload.create({ title, description, author})
      res.status(200).send({
        message: "Insertion effectuée"
      })
    }catch(error){
      console.log("Une erreur est surevnue : " + error)
    }
  }
})

//READ ALL 
router.get('/upload', async(req, res) => {
  const uploads = await Upload.findAll({
      order:sequelize.literal('id DESC')
  })

  return res.send(uploads)
})

//UPDATE
router.put('/home/:id', async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const author = req.body.author

  //Vérification que les champs obligatoires sont bien remplis

  if(title === undefined || title === ""){
    return res.status(400).send({
      message: "Le titre est vide !"
    })
  }
  else if(description === undefined || description === ""){
    return res.status(400).send({
      message: "La description du post est vide !"
    })
  }
  else{
    try{
      await Upload.update({ title, description, author }, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).send({
        message: "Le post a bien été modifié !"
      })
    }catch(error){
      console.log("Une erreur est survenue : " + error)
    }
  }
})

//DELETE
router.delete('/home/:id', async (req,res) => {
  try{
    const deleted = await Upload.destroy({
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