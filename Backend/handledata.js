const express = require("express");
const mongoose = require("mongoose");
const productdata = require("./MOCK_DATA.json");
const datas = require('./models/data');
const app = express();

const PORT =  6000;


const start  = async () =>{
    try{
        mongoose.connect("mongodb://localhost:27017/JSON", {
 
        }).then(() => {
          console.log("Connected to MongoDB");
        }).catch((error) => {
          console.error("Error connecting to MongoDB:", error);
        }); 
        
        await datas.create(productdata);
        console.log("Data inserted");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          }).on("error", (err) => {
            console.error("Error starting server:", err);
          });
    
    }
    catch(error){
        console.log(error);
}
}

start();


