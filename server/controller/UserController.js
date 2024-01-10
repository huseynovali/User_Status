const User = require("../model/UserModel");

const UserController = {
  register: async (req, res) => {
    const { username, email } = req.body;
    try {
      const userCheck = await User.findOne({ email });
      if (userCheck) {
        res.status(409).json({ message: "this email already exists !" });
      }
      const newUser = new User({
        username,
        email,
      });
      newUser
        .save()
        .then(() => res.status(201).json(newUser))
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      res.status(500).json(error);
    }
  },

  login: async (req, res) => {},
};

module.exports = UserController;
