const User = require("../model/UserModel");

const UserController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

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
        .then(() => res.status(201).json(newUser._id))
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      res.status(500).json(error);
    }
  },

  login: async (req, res) => {
    const { email } = req.body;
    try {
      const userCheck = await User.findOne({ email });
      if (!userCheck) {
        res.status(404).json("user not found !");
      }
      userCheck.status = true;
      userCheck.save();
      res.status(200).json(userCheck);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = UserController;
