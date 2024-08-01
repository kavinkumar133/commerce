//cartModel.js is a model file for cart collection in the database. It defines the schema of the cart collection. It exports the cart model.
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    products: [{
        product_id: {
            type: String
        },
        quantity: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Cart', cartSchema);
