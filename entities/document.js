class Document {

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
  get document(){
    return this.row.document
  }
  get date_creation(){
    return this.row.date_creation
  }
}

module.exports = Document