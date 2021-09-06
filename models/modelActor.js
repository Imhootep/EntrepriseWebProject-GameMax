const { response } = require('express')
let connection = require('../config/db')
const Actor = require('../entities/actor')
const actor = require('../entities/actor')
class ModelActor{

  //CRUD actor
  static create(actor, cb){
    connection.insert('actors', {
      nom: actor.nom,
      role: actor.role,
      rue: actor.rue,
      numero: actor.numero,
      boite: actor.boite,
      ville: actor.ville,
      cp: actor.cp,
      mail: actor.mail,
      telephone: actor.telephone,
      informations: actor.informations,
      membres: actor.membres,
      urlSiteWeb: actor.urlSiteWeb,
      urlFacebook: actor.urlFacebook,
      urlTwitter: actor.urlTwitter,
      utlYoutube: actor.utlYoutube,
      urlLinkedin: actor.urlLinkedin,
      urlDiscord: actor.urlDiscord,
      commentaires: actor.commentaires,
    }, (error, response) => {
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