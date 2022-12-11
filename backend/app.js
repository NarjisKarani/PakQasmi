const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require ('body-parser')

//MODELS
const Member = require('./models/members');

const app = express();
const port = 8500;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended:false}))
// app.use(bodyParser.json())

//MULTER
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(nll, file.originalname);
  }
})
const upload = multer({ storage: storage });

//DATABASE
const uri = 'mongodb+srv://user-1:NKarani@cluster0.ffupy.mongodb.net/PakQasmi?retryWrites=true&w=majority';
mongoose.connect(uri).then((result)=>{
  console.log('Mongo connected');
}).catch((error)=>{
  console.error('error connecting to Mongo', error);
});

//READ
app.get('/members', (req, res) => {
    Member.find().then((data)=>{
        // console.log(data);
        // console.log("memberlist working");
        console.log('ok');
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

// app.get('/girlslisting', (req, res) => {
//     Member.find({'gender': 'Female'}).then((data)=>{
//         // console.log(data);
//         console.log("girl's list working");
//         res.send(data);
//     }).catch((err)=>{
//         res.send(err.message);
//     });
// });
  
// app.get('/boyslistings', (req, res) => {
//     Member.find({'gender': 'Male'}).then((data)=>{
//         // console.log(data);
//         console.log("boy's list working");
//         res.send(data);
//     }).catch((err)=>{
//         res.send(err.message);
//     });
// });
  

//CREATE
app.post('/register', (req, res) => {
  console.log(req.body);
  console.log("member created");
  Member.create(req.body).then((data)=>{
    res.send({
      error:null,
      status:true,
    });
  }).catch((err)=>{
      res.send({
        error:true,
        message:err.message,
      });
  });
});
// app.post('upload',upload.single('image'),(req, res)=> {
//   console.log(JSON.stringify(req.file));
//   res.send('ok');
// });

// app.post('/register',upload.single('image'),(req, res) => {
//   console.log(JSON.stringify(req.file));
//   const member=new Member({
//     name: req.body.name,
//     fathername: req.body.fathername,
//     gender: req.body.gender,
//     email: req.body.email,
//     password: req.body.password,
//     bloodgroup: req.body.bloodgroup,
//     cnic: req.body.cnic,
//     dob: req.body.dob,
//     address: req.body.address,
//     education: req.body.education,
//     city: req.body.city,
//     occupation: req.body.occupation,
//     mobilenumber: req.body.mobilenumber,
//     emergencycontact: req.body.emergencycontact,
//     emergencyrelation: req.body.emergencyrelation,
//     // image: req.file.filename
//     image: "xyz",
//   });
//   member.save(member).then((data)=>{
//     console.log("member test working" + data);
//     return res.send(data);
//   })
//   console.log(req.body);
//   console.log("Member registered")
// });

// UPDATE
app.post('/updateform', (req, res) =>{
    Member.findByIdAndUpdate(req.body._id, 
      {$set: {'name': req.body.name, 
              'fathername': req.body.fathername,
              'gander': req.body.gander,
              'group': req.body.group,
              'cnic': req.body.cnic,
              'city': req.body.city,
              'address': req.body.address,
              'mobilenumber': req.body.mobilenumber,
              'registrationnumber': req.body.registrationnumber,
              'occupation': req.body.occupation,
              'education': req.body.education,
              'bloodgroup': req.body.bloodgroup,
              'emergencycontact': req.body.emergencycontact,
              'emergencyrelation': req.body.emergencyrelation,
              'email': req.body.email}}, 
      (err, result) => {
        if (err) 
          throw err;
        console.log('User updated!');
        res.redirect('/');
      }
    );
  });
  

//DELETE
app.delete('/individualpage/:id', (req, res) => {
    Member.findByIdAndDelete(req.params.id).then((res)=>{
        console.log('Worked');
      res.json({
        status:true,
        message:null,
      })
    }).catch((err)=>{
      res.json({
        status:false,
        message:err.message,
      });
    });
});

//SERVER
app.listen(
    process.env.PORT || port, () => 
        console.log(`Listening on port ${port}!`)
);