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
        console.log("memberlist working");
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});
// app.get('/userlistsearch', (req, res) => {
//       console.log(req.body.searchname)
//       Member.findOne({name: req.body.searchname}).then((data)=>{
//           console.log("searchname worked");
//           res.send(data);
//       }).catch((err)=>{
//           res.send(err.message);
//       });
// });

// app.get('/girlslist', (req, res) => {
//     Member.find({'gender': 'Female'}).then((data)=>{
//         // console.log(data);
//         console.log("girl's list working");
//         res.send(data);
//     }).catch((err)=>{
//         res.send(err.message);
//     });
// });
  
// app.get('/boyslist', (req, res) => {
//     Member.find({'gender': 'Male'}).then((data)=>{
//         // console.log(data);
//         console.log("boy's list working");
//         res.send(data);
//     }).catch((err)=>{
//         res.send(err.message);
//     });
// });
  

//CREATE
app.post('/member', (req, res) => {
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

//UPDATE
// app.post('/memberupdate', (req, res) =>{
//     Member.findByIdAndUpdate(req.body._id, 
//       {$set: {req.body}}, 
//       (err, result) => {
//         if (err) 
//           throw err;
//         console.log('User updated!');
//         res.redirect('/');
//       }
//     );
//   });
  

//DELETE
app.delete('/member/:id', (req, res) => {
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