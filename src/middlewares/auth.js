const adminAuth = (req,res,next)=>{
  console.log("authenticate is checked");
  const token = "xyz";
  const authenticate= token ==="xyz";
  if(!authenticate){
    return res.status(401).send("unauthorized");
  }
  else{
  next();
  }
};
const userAuth = (req,res,next)=>{
  console.log("authenticate is checked");
  const token = "xyz";
  const authenticate= token ==="xyz";
  if(!authenticate){
    return res.status(401).send("unauthorized");
  }
  else{
  next();
  }
}

module.exports={adminAuth, userAuth};