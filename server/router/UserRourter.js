const express = require('express');
const UserController = require('../controller/UserController');

const UserRouter = express.Router();


UserRouter.post('/',UserController.register)




module.exports=UserRouter

