let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let companySchema = new Schema({
    userid: String,
    name: String,
    companyname: String,
    address: String
});

module.exports = mongoose.model('company',companySchema);