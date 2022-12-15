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
        mobilenumber: {type: Number, required: true, min: [10, 'Invalid number'], max: [12, 'Invalid number']},
        registrationnumber: {type: Number},
        cnic: {type: Number, required: true, min:[12, 'Invalid'], max:[14, 'Invalid']},
        address: {type: String, required: true},
        city: {type: String, default: 'Karachi', required: true},
        occupation: {type: String, required: true},
        education: {type: String, required: true},
        bloodgroup: {type: String, required: true},
        emergencycontact: {type: Number, required: true, min: [10, 'Invalid number'], max: [12, 'Invalid number']},
        emergency: {type: String, required: true},
        remarks: {type: String},
        imagepath: {type: String, required: true},
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
