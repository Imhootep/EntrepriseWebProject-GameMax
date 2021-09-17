// const express = require ('express')
// const router = express.Router()
// const { Post } = require('../models')
// const cors = require('cors')

// //CREATE
// router.post('/upload', async (req, res) => {
//   const title = req.body.title
//   const description = req.body.description
//   // const user_id = req.user.id 
//   const attachment = req.body.attachment

//   //Vérification que les champs obligatoires sont bien remplis

//   if(title === undefined || title === ""){
//     return res.status(400).send({
//       message: "Il n'y pas de titre !"
//     })
//   }
//   else if(description === undefined || description === ""){
//     return res.status(400).send({
//       message: "Votre publication est vide !"
//     })
//   }
//   else{
//     try{
//       Post.create({ title, description, attachment})
//       res.status(200).send({
//         message: "Insertion effectuée"
//       })
//     }catch(error) {
//       console.log("Une erreur est survenue : " + error)
//     }
//   }
// })

// //READ
// router.get('/post', async (req, res) => {
//   const posts = await Post.findAll()

//   if(!posts || posts == []){
//     return res.status(400).send({
//       message: "Aucun post à retourner"
//     })
//   }
//   else{
//     return res.send(posts)
//   }
// })

// //UPDATE
// router.put('/post/:id', async (req, res) => {
//   const title = req.body.title
//   const description = req.body.description
//   const user_id = req.params.user
//   const attachment = req.body.attachment

//   //Vérification que les champs obligatoires sont bien remplis

//   if(title === undefined || title === ""){
//     res.status(400).send({
//       message: "Il n'y a pas de titre !"
//     })
//   }
//   else if(description === undefined || description === ""){
//     res.status(400).send({
//       message: "Il n'y a pas de description !"
//     })
//   }
//   else{
//     try{
//       await Post.update({ title, description, user_id, attachment }, {
//         where: {
//           id: req.params.id
//         }
//       })
//       res.status(200).send({
//         message: "Le post a bien été modifié"
//       })
//     }catch(error){
//       console.log("Une erreur est survenue : " + error)
//     }
//   }
// })

// //DELETE
// router.delete('/post/:id', async (req,res) => {
//   try{
//     const deleted = await Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     if(deleted){
//       res.status(200).send({
//         message: "Suppression effectuée"
//       })
//     }
//     else{
//       res.status(400).send({
//         message: "Suppression impossible : aucune correspondance pour l'id"
//       })
//     }
//   }catch(error){
//     console.log("Une erreur est survenue : " + error)
//   }
// })

// module.exports = router 
