const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  // logic to save the data
  res.send({ name: "sonu", age: "20", city: "bhopal" });
});

app.get("/user/:name/:Sname", (req, res) => {
  // logic to fetch the data
  console.log(req.params); // for printing the request parameters
  console.log(req.query); // for printing the query parameters
  res.send("data is fetched successfully");
});

app.post("/user", (req, res) => {
  // logic to save the data
  res.send("data is saved successfully");
});
app.delete("/user", (req, res) => {
  // logic to delete the data
  res.send("data is deleted successfully");
});

//.use is used for all the methods
app.use("/test", (req, res) => {
  res.send("hello from test route");
});

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
