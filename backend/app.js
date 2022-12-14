const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require ('body-parser')

//MODELS
const Member = require('./models/members');
const upload = multer({ dest: './public' })

const app = express();
const port = 8500;

app.use(cors());
app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

//MULTER
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, '/public')
//   },
//   filename: function (req, file, cb) {
//     cb(nll, file.originalname);
//   }
// })
// const upload = multer({ storage: storage });

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
        console.log("Member's list");
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

app.get('/girlslisting', (req, res) => {
    Member.find({'gender': 'Female'}).then((data)=>{
        // console.log(data);
        // console.log("Girl's list");
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

app.get('/boyslistings', (req, res) => {
  Member.find({'gender': 'Male'}).then((data)=>{
      // console.log(data);
      // console.log("Boy's list");
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});

//CREATE
// app.post('/registera', upload.single('displayPicture'), (req, res, next) => {
//   // console.log(req.body);
//   console.log("Created");
//   console.log(req.body);
//   console.log(req.file);
//   // Member.create(req.body).then((data)=>{
//   //   res.send({
//   //     error:null,
//   //     status:true,
//   //   });
//   // }).catch((err)=>{
//   //     res.send({
//   //       error:true,
//   //       message:err.message,
//   //     });
//   // });
//   res.send('ok')
// });
// app.post('/register', upload.single('image'), (req, res, next)=> {
//   req.body.imagePath = req.file.path
//   console.log(req.body);
//   console.log(req.file);
//   Member.create(req.body).then((data)=>{
//     res.send({
//       error:null,
//       status:true,
//     });
//   }).catch((err)=>{
//       res.send({
//         error:true,
//         message:err.message,
//       });
//   });
//   // res.send('ok');
// });

// app.post('/register', (req, res)=> {
//     // req.body.imagePath = req.file.path
//     console.log(req.body);
//     // console.log(req.file);
//     Member.create(req.body).then((data)=>{
//       res.send({
//         error:null,
//         status:true,
//       });
//     }).catch((err)=>{
//         res.send({
//           error:true,
//           message:err.message,
//         });
//     });
//     // res.send('ok');
//   });

app.post('/register', upload.single('image'), (req, res, next)=> {
  // console.log(req.file);
  console.log(req.body.name);
  // const member=new Member({
  //   name: req.body.name,
  //   fathername: req.body.fathername,
  //   gender: req.body.gender,
  //   email: req.body.email,
  //   group: req.body.group,
  //   bloodgroup: req.body.bloodgroup,
  //   cnic: req.body.cnic,
  //   dob: req.body.dob,
  //   address: req.body.address,
  //   education: req.body.education,
  //   city: req.body.city,
  //   occupation: req.body.occupation,
  //   mobilenumber: req.body.mobilenumber,
  //   registrationnumber: req.body.registrationnumber,
  //   emergencycontact: req.body.emergencycontact,
  //   emergency: req.body.emergency,
  //   // image: req.file.filename
  //   image: "xyz",
  // });
  // member.save(member).then((data)=>{
  //   console.log("member test working" + data);
  //   return res.send(data);
  // })
  res.send('ok')
});

// UPDATE
app.post('/updateform/:id', (req, res) =>{
  Member.findByIdAndUpdate(req.params.id, req.body)
  .then((res)=>{
    console.log('Updated');
    res.json({
      status:true,
      message:null,
    })
  })
  .catch((err)=>{
    res.json({
      status:false,
      message:err.message,
    });
  });
});

//DELETE
app.delete('/memberdelete/:id', (req, res) => {
    Member.findByIdAndDelete(req.params.id).then((res)=>{
        console.log('Deleted');
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