const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async(req, res) =>{
  const user = new User({
    firstName: "Sonu",
    lastName: "Dhakad",
    emailId: "dhakadsonu219@gmail.com",
    age: 20,
  })

  try{
    await user.save();
   res.send("user signed up and data saved to db");
  }
  catch(err){
    res.status(400).send("error while signing up the user");
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
