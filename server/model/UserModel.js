const { mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  socketId: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
