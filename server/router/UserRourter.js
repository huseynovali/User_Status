const express = require("express");
const UserController = require("../controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers);
UserRouter.post("/", UserController.register);
UserRouter.post("/login", UserController.login);

module.exports = UserRouter;
