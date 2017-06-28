// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StreetSchema   = new Schema({
    name: String,
    jam_level: Number,
    holes: [{lat:Number, lng:Number, reports: Number, level: Number}],
    shape: [{lat:Number, lng:Number}]
});

module.exports = mongoose.model('streets', StreetSchema);