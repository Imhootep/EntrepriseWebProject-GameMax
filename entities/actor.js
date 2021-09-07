class Actor {
  
  //constructor
  /*constructor(row){
    this.row = row
  }*/

  constructor(nom, role, rue, numero, boite, ville, cp, mail, telephone, informations, membres, urlSiteWeb,
     urlFacebook, urlTwitter, urlYoutube, urlLinkedin, urlDiscord, commentaires){
    this.nom = nom
    this.role = role
    this.rue = rue
    this.numero = numero
    this.boite = boite
    this.ville = ville
    this.cp = cp
    this.mail = mail
    this.telephone = telephone
    this.informations = informations
    this.membres = membres
    this.urlSiteWeb = urlSiteWeb
    this.urlFacebook = urlFacebook
    this.urlTwitter = urlTwitter
    this.urlYoutube = urlYoutube
    this.urlLinkedin = urlLinkedin
    this.urlDiscord = urlDiscord
    this.commentaires = commentaires
  }

  //getters

  /*get id(){
    return this.row.id
  }
  get nom(){
    return this.row.nom
  }
  get role(){
    return this.row.role
  }
  get rue(){
    return this.row.rue
  }
  get numero(){
    return this.row.numero
  }
  get boite(){
    return this.row.boite
  }
  get ville(){
    return this.row.ville
  }
  get cp(){
    return this.row.cp
  }
  get mail(){
    return this.row.mail
  }
  get telephone(){
    return this.row.telephone
  }
  get informations(){
    return this.row.informations
  }
  get membres(){
    return this.row.membres
  }
  get urlSiteWeb(){
    return this.row.urlSiteWeb
  }
  get urlFacebook(){
    return this.row.urlFacebook
  }
  get urlTwitter(){
    return this.row.urlTwitter
  }
  get urlYoutube(){
    return this.row.urlYoutube
  }
  get urlLinkedin(){
    return this.row.urlLinkedin
  }
  get urlDiscord(){
    return this.row.urlDiscord
  }
  get commentaires(){
    return this.row.commentaires
  }*/
}

module.exports = Actor