const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add First Name"],
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Please add Last Name"],
    minlength: 3,
    maxlength: 50,
  },
});

module.exports = mongoose.model("User", UserSchema);
