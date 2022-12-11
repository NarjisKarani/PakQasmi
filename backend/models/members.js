const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const MemberSchema = new Schema({
    name: {type: String, required: true},
    fathername: {type: String, required: true},
    gender: {type: String, required: true},
    email:    {type: String, required: true, validate: [isEmail, 'Enter a valid email address'], lowercase: true,},
    mobilenumber: {type: Number, required: true},
    address: {type: String, required: true},
    cnic: {type: Number, required: true},
    dob: {type: Number, required: true},
    occupation: {type: String},
    education: {type: String},
    bloodgroup: {type: String},
    city: {type: String, default: 'Karachi', required: true},
    emergencycontact: {type: Number},
    emergencyrelation: {type: String},
});

module.exports = mongoose.model('Members', MemberSchema);
