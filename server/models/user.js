const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
}, {
  versionKey: false
});

const User = mongoose.model("user", userSchema);
module.exports = User;
