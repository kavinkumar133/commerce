const cart = require('../model/cartModel');    // Importing cart model to use it in the controller
// Function to get all the carts
const getAllCart = async (req, res) => {
    try {
        const carts = await cart.find();    // Finding all the carts
        res.send(carts);    // Sending all the carts as response
    } catch (e) {
        console.log(e);    // Logging error
        res.status(500).send({ message: "Error retrieving carts" });    // Sending error response
    }
};
// Function to create a cart
const createCart = async (req, res) => {
    try {
        const cartData = {    // Creating cart data
            user_id: req.body.user_id,    // Getting user_id from request body
            Products: req.body.Products    // Getting Products from request body
        };
        const cart = new cart(cartData);    // Creating new cart
        await cart.save();    // Saving the cart
        res.status(201).send(cart);    // Sending the cart as response
    } catch (e) {
        console.log(e);    // Logging error
        res.status(400).send({ message: "Error creating cart" });    // Sending error response
    }
};
// Function to update a cart
const updateCart = async (req, res) => {
    try {
        const cart = await cart.findOneAndUpdate({ id: req.params.id }, req.body, {    // Finding the cart by id and updating it
            new: true,
        });
        if (!cart) {    // If cart not found
            return res.status(404).send({ message: "Cart not found" });    // Sending error response
        }
        res.send(cart);    // Sending the updated cart as response
    } catch (e) {
        console.log(e);    // Logging error
        res.status(400).send({ message: "Error updating cart" });    // Sending error response
    }
};
// Function to delete a cart
const deleteCart = async (req, res) => {
    try {
        const cart = await cart.findOneAndDelete({ id: req.params.id })    // Finding the cart by id and deleting it
        if (!cart) {    // If cart not found
            return res.status(404).send({ message: "Cart not found" });    // Sending error response
        }
        res.send(cart);    // Sending the deleted cart as response
    } catch (e) {
        console.log(e);    // Logging error
        res.status(400).send({ message: "Error deleting cart" });    // Sending error response
    }
};
// Exporting the functions to use it in the routes

module.exports = {getAllCart, createCart, updateCart, deleteCart};