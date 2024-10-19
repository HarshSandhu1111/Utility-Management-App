const express = require("express");
const { handlesignup, handlelogin } = require("../Controllers/user");

const router =  express.Router();

router.post('/signup',handlesignup);
router.get("/",(req,res) =>{
   res.send("Hello World");
})
router.post('/login',handlelogin);




module.exports = router;
