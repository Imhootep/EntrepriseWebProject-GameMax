class Event{

  //constructor
  constructor(row){
    this.row = row
  }

  //getters
  get id(){
    return this.row.id
  }
  get nom(){
    return this.row.nom
  }
  get description(){
    return this.row.description
  }
  get date_debut(){
    return this.row.date_debut
  }
  get date_fin(){
    return this.row.date_fin
  }
}

module.exports = Event