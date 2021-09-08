const { response } = require('express')
let connection = require('../config/db')
const Actor = require('../entities/actor')
class ModelActor{

  //CRUD actor
  static create(actor, cb){
    connection.query("INSERT INTO actors SET nom = ?, role = ?, rue = ?, numero = ?, boite = ?, ville = ?, cp = ?, mail = ?, telephone = ?, informations = ?, membres = ?, urlSiteWeb = ?, urlFacebook = ?, urlTwitter = ?, urlYoutube = ?, urlLinkedin = ?, urlDiscord = ?, commentaires = ?",
    [actor.nom, 
    actor.role,
    actor.rue,
    actor.numero,
    actor.boite,
    actor.ville,
    actor.cp,
    actor.mail,
    actor.telephone,
    actor.informations,
    actor.membres,
    actor.urlSiteWeb, 
    actor.urlFacebook,
    actor.urlTwitter,
    actor.urlYoutube,
    actor.urlLinkedin,
    actor.urlDiscord,
    actor.commentaires
    ], (error, response) => {
      if(error) throw error
      cb(response)
    })
  }
  static all(cb){
    connection.query("SELECT * FROM actors", (error, response) => {
      if(error) throw error
      cb(response.map((row) => new Actor(row)))
    })
  }
  static read(){

  }
  static update(){

  }
  static delete(){

  }
}

module.exports = ModelActor