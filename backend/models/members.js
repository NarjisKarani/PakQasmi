const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const MemberSchema = new Schema(
    {
        name: {type: String, required: true},
        fathername: {type: String, required: true},
        gender: {type: String, required: true},
        email:    {type: String, required: true, validate: [isEmail, 'Enter a valid email address'], lowercase: true,},
        group: {type: String, required: true},
        dob: {type: Date, required: true},
        mobilenumber: {type: Number, required: true, min:10, max: 12},
        registrationnumber: {type: Number},
        cnic: {type: Number, required: true},
        address: {type: String, required: true},
        city: {type: String, default: 'Karachi', required: true},
        occupation: {type: String, required: true},
        education: {type: String, required: true},
        bloodgroup: {type: String, required: true},
        emergencycontact: {type: Number, required: true},
        emergency: {type: String, required: true},
        comments: {type: String},
        // imagepath: {type: String}
        // imagePath: {type: String},
        // documentPath: {type: String},
        // image: {type: String, desc: String,
        //     img:
        //     {
        //         data: Buffer,
        //         contentType: String
        //     }},
        // documents: {type: String},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Members', MemberSchema);
