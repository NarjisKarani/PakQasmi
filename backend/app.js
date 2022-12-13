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
        console.log('member listing');
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

app.get('/girlslisting', (req, res) => {
    Member.find({'gender': 'Female'}).then((data)=>{
        // console.log(data);
        console.log("girl's list working");
        console.log('okay working')
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

app.get('/boyslistings', (req, res) => {
  Member.find({'gender': 'Male'}).then((data)=>{
      // console.log(data);
      console.log("boy's list working");
      console.log('okay working')
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});
  
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
        console.log('Delete worked');
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