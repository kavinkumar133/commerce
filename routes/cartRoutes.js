const express = require("express");
const Router = express.Router();
const cartController = require("../controller/cartController");
const auth = require("../middleware/auth");

Router.get('/getCart', cartController.getAllCart);
Router.post('/post', cartController.createCart);
Router.put('/updateCart/:id', cartController.updateCart);
Router.delete('/delete/:id',cartController.deleteCart);

module.exports = Router;