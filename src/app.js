const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  // logic to fetch the data
  res.send({name: "sonu", age: "20", city: "bhopal"});
});

app.post("/user", (req, res) => {
  // logic to save the data
  res.send("data is saved successfully");
});
app.delete("/user", (req, res) => {
  // logic to delete the data
  res.send("data is deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("hello from test route");
});

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
