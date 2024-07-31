const express = require("express");
const Router = express.Router();
const userController = require("../controller/userController");

Router.post('/login', userController.login);
Router.post('/signup', userController.signup); 

module.exports = Router;
