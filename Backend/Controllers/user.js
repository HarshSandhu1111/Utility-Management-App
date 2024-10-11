const user = require("../models/user");

async function handlesignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const newUser = await user.create({ name, email, password });
    res.send(`User   created: ${name} ,${email}, ${password}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function handlelogin (req,res) {
  const { email, password } = req.body;
  try {
 const userfound = await user.findOne({ email })
    .then(userfound =>{
      if(userfound) {
        if(userfound.password === password){
          res.status(200).send("Status Working");
          
        }
        else{
          res.json("Incorrect passoword")
        }
      }
      else{
        res.json("User not found");
      }
    })


  } catch(err) {
    res.status(500).json({ message: err.message });
  }


} 

module.exports ={
    handlesignup,
    handlelogin
}