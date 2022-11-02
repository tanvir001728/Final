const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require('express-session');
const findOrCreate = require('mongoose-findorcreate');
const cors = require("cors");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vivasoft:1234@mycluster.xi8zf1r.mongodb.net/medicine";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));


const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
  app.get("/",(req,res)=> {
    res.sendFile(__dirname + '/views/index.html');
  });
/////
/*Database schema for admin */
const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);
require("./models/userDetails");
UserDetailsScehma.plugin(findOrCreate);
const User = mongoose.model("UserInfo");


const med = require("./models/medicine");
const Admin = require("./models/admin");
const { response } = require("express");
  //get medicine info
  app.get("/getmed", async (req, res) => {
    try {
      const response = await med.find();
      res.json(response);
    } catch (err) {
      res.json({ message: err });
    }
  });
  //add madicine info
  app.post("/postmed", async (req, res) => {
    try {
      const response = await med.create(req.body);
      res.json(response);
    } catch (err) {
      res.json({ message: err });
    }
  });
//search

app.post('/getmedicine',async(req,res)=>{

  
 let payload = req.body.name.trim();

  let search = await med.find({name: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
  search = search.slice(0,10);
  res.send({"name": search}) 
  
});

//get specific medicine info
app.get('/getmedicine/:id',async(req, resp)=>{
  resp.send(await med.find({name:req.params.id}));
});
//delete selected medicine
app.delete('/delete/:id', async(req,resp)=>{
  let id = req.params.id;
  await med.deleteOne({_id: id});
  resp.send('Deleted!');
})
//add new medicine
app.post('/addmedicine', async (req,resp)=>{
  let reqBody=req.body;
  let newmaterial = new med({
    name: reqBody.name,
      strength: reqBody.strength,
      generic_name: reqBody.generic_name,
      description: reqBody.description,
      side_effect: reqBody.side_effect,
      doses: reqBody.doses,
      precautions: reqBody.precautions,
      indication: reqBody.indication,
      price: reqBody.price,
      company:reqBody.company

  })
  await newmaterial.save();

  resp.send('Created!'); 
  
})
//get all info of one selected medicine
app.get('/showOne/:id',async(req,resp)=>{
  let id = req.params.id;
  let medi = await med.findOne({_id:id});
  resp.send(medi);
})
//update medicine info
app.put('/update/:id',async (req,resp)=>{
  let id = req.params.id;
  await med.updateOne({_id: id},req.body);
  resp.send('Updated!');
})
///// login and authorization handling
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET); // session expire kora jabe

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    console.log(token);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {

        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});
///////