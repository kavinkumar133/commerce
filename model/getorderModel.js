const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    product: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    subtotal: { type: Number, required: true },
    orderdate: { type: Date, required: true },
    estimated_orderdate: { type: Date, required: true },
    id: { type:String, required: true },
    status: { type: String, required: true }
})

module.exports = mongoose.model("Order", orderSchema);