let mongoose = require("mongoose");

let User = mongoose.model("USer", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };
