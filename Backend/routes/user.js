const express = require("express");
const { handlesignup, handlelogin, checkAvailability } = require("../Controllers/user");

const router =  express.Router();

router.post('/signup',handlesignup);
router.get("/",(req,res) =>{
   res.send("Hello World");
})
router.post('/login',handlelogin);


router.get('/check_available/:id',checkAvailability);




module.exports = router;
