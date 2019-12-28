let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let attendanceSchema= new Schema({
    userid: String,
    name: String,
    year: String,
    month: String,
    day: String,
    hour: String,
    min: String,
    sec: String,
});

module.exports = mongoose.model('attendance',attendanceSchema);