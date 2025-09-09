const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());  // middleware to understand json data

app.post("/signup", async (req, res) => {
  // console.log(req.body);

  const user = new User(req.body);

  try {
    await user.save();
    res.send("user signed up and data saved to db");
  } catch (err) {
    res.status(400).send("error while signing up the user");
  }
});

// fetch user details based on last name 
app.get("/user", async (req, res)=>{
  try{
    const user = await User.findOne({lastName: req.body.lastName})
    if(!user){
      return res.status(404).send("user not found");
    }
      else{
      res.send(user);
      }
  }
  catch(err){
    res.status(400).send("error while fetching users");
  }
})

// fetch all users
app.get("/feed", async (req, res)=>{
  try{
    const users = await User.find({});
    if(!users){
      return res.status(404).send("no users found");
    }
    else{
      res.send(users);
    }
  }
  catch(err){
    res.status(400).send("error while fetching users");
  }
} )

// delete the user
app.delete("/user", async (req, res)=>{
  const userId = req.body.userId;
  try{
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  }
  catch(err){
    res.status(400).send("error while deleting the user");
  }
})

//update the user
app.patch("/user", async (req, res)=>{
  const userId = req.body.userId;
  const data = req.body;
  try{
    const user = await User.findByIdAndUpdate(userId, data);
    res.send("user updated successfully");
  }
  catch(err){
    res.status(400).send("error while updating the user");
  }
})

connectDB()
  .then(() => {
    console.log("database connected successfully");
    app.listen(7777, () => {
      console.log("server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("error while connecting to database");
  });
