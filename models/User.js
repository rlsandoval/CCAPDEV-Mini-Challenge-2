const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Personal Information
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  phone:     { type: String },
  birthdate: { type: String },

  // Account Details
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Shipping Address
  street:   { type: String },
  city:     { type: String },
  province: { type: String },
  zip:      { type: String },
});

module.exports = mongoose.model('User', userSchema);
