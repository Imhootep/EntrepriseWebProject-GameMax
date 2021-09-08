/*

const passwordHash = require("password-hash");
const connectionDB = require("../config/db");

const Schema = connectionDB.Schema;

const userSchema = new Schema({
  //id: { type: 'INT', size: '15' },
  nom: { type: 'VARCHAR', size: '255' },
  role: { type: 'VARCHAR', size: '255' },
  rue: { type: 'VARCHAR', size: '255' },
  numero: { type: 'VARCHAR', size: '255' },
  boite: { type: 'VARCHAR', size: '255' },
  ville: { type: 'VARCHAR', size: '255' },
  cp: { type: 'VARCHAR', size: '255' },
  mail: { type: 'VARCHAR', size: '255' },
  telephone: { type: 'VARCHAR', size: '255' },
  informations: { type: 'VARCHAR', size: '255' },
  membres: { type: 'JSON' }, 
  urlSiteWeb: { type: 'VARCHAR', size: '255' },
  urlFacebook: { type: 'VARCHAR', size: '255' },
  urlTwitter: { type: 'VARCHAR', size: '255' },
  urlYoutube: { type: 'VARCHAR', size: '255' },
  urlLinkedin: { type: 'VARCHAR', size: '255' },
  urlDiscord: { type: 'VARCHAR', size: '255' },
  commentaires: { type: 'VARCHAR', size: '255' },
  date: { type: 'DATE', default: new Date() }
});

userSchema.index({ name: 'Alan', role: 'Développeur web', rue: 'Progrès', numero: '24'})

UserSchema.pre('save', function (next) {
    console.log(this.name);
    next();
  });

/*
userSchema.methods = {
  authenticate: function(password) {
    return passwordHash.verify(password, this.password);
  },
  getToken: function() {
    return jwt.encode(this, config.secret);
  }
};
*/

module.exports = connectionDB.model("User", userSchema);