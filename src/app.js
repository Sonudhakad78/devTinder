const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");
app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/admin/getData", (req, res)=>{
  res.send("data is here");
});
app.post("/user/login", (req, res)=>{
  res.send("user logged in successfully");
})
app.use("/user", userAuth, (req, res,next)=>{
  res.send("user is here");
});

app.delete("admin/deleteData", (req, res)=>{
  res.send("data deleted"); 
});


app.listen(7777, () => {
  console.log("server is running on port 7777");
});
