const user = require("../models/user");

const Provider = require("../models/data");

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

async function checkAvailability(req, res) {
  const { id } = req.params;
  const numericId = parseInt(id); 
  console.log("Received ID:", numericId);


  try {
      const provider = await Provider.findOne({ id: numericId });
      console.log("Provider found:", provider); 

      if (!provider) {
          return res.status(404).json({ message: "Provider not found" });
      }

      const isAvailable = provider.is_available_today;

      res.json({
          providerId: provider._id,
          isAvailable,
          providerDetails: {
              firstName: provider.first_name,
              lastName: provider.last_name,
              address: provider.address,
              phone: provider.phone,
          },
      });
  } catch (error) {
      console.error("Error checking provider availability:", error);
      res.status(500).json({ message: "Server error" });
  }
}



module.exports ={
    handlesignup,
    handlelogin,
    checkAvailability,
    
}