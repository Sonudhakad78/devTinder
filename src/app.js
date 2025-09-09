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
