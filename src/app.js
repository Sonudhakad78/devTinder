const express = require('express');
const app = express();

app.use("/check",(req,res)=>{
    res.send("hello from express check 1234!");
})

app.use("/test", (req,res)=>{
    res.send("hello from test route");
})

app.listen(7777, ()=>{
    console.log("server is running on port 7777");
})