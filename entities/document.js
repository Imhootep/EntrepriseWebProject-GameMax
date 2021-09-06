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
}

module.exports = Document