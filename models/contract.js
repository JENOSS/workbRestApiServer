let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let contractSchema = new Schema({
    company : String,
    employeeName : String,
    employerName : String,
    employeePhoneNumber : String,
    employerPhoneNumber : String ,
    year: String,
    month : String,
    day : String,
    wage : Number,
    workday :  Number, //일주에 며칠?
    workHour :  Number,
    period :  Number
    
});

module.exports = mongoose.model('contract',contractSchema);