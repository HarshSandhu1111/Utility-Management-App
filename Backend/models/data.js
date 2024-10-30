const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id:{type:Number ,required : true},
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  is_available_today: { type: Boolean, default: false } // Simple availability flag
});

const Provider = mongoose.model('Provider', userSchema);

module.exports = Provider;
