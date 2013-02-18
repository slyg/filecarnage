var 
    path        = require('path'),
    appconf     = require('./conf'),
    schemes     = require('./schemes'),
    mongoose    = require('mongoose'),
    Schema      = mongoose.Schema
;

/* --- connect to db --- */

mongoose.connect(appconf.mongoose.path);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/* build models */

var suspectSchema = new Schema(schemes.suspect);

/* export models */

module.exports = {
    Suspect : mongoose.model('Suspect', suspectSchema)
}