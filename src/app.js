const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("middleware");
  // res.send("1 route handler");
  next();
});

app.get(
  "/user",
  (req, res, next) => {
    console.log("1 route handler");  // middleware also
    next();
  },
  [
    (req, res, next) => {
      console.log("2 route handler");   // middleware also
      next();
    },
    (req, res) => {
      console.log("3 route handler");
      res.send("user response");
    },
  ]
);

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
