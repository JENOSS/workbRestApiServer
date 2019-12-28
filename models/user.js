let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    userid: String,
    passwd: String,
    name: String,
    phone: String,
    auth: Number, // 고용주 1, 근로자 2
});

module.exports = mongoose.model('user',userSchema);