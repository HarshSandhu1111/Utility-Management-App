const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
id :{
    type : Number,

},
first_name :{
  type:String,
  required:true,


},
last_name:{
    type:String,
    required:true,
},
gender :{
    type:String,
},
phone:{
    type:String,

},

Address :{
    type:String,
}




}, { timestamps: true });

const datas = mongoose.model('datas', userSchema);

module.exports = datas;