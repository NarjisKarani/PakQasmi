const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const MemberSchema = new Schema({
    name: {type: String},
    fathername: {type: String},
    gender: {type: String},
    email:    {type: String, validate: [isEmail, 'Enter a valid email address'], lowercase: true,},
    group: {type: String},
    dob: {type: Number},
    mobilenumber: {type: Number},
    registrationnumber: {type: Number},
    cnic: {type: Number},
    address: {type: String},
    city: {type: String, default: 'Karachi'},
    occupation: {type: String},
    education: {type: String},
    bloodgroup: {type: String},
    emergencycontact: {type: Number},
    emergencyrelation: {type: String},
    image: {type: String},
    documents: {type: String},
});

module.exports = mongoose.model('Members', MemberSchema);
