const getOrder = require("../model/getorderModel");
const addOrder = async (req, res) => {
    const { product, subtotal, orderdate, estimated_orderdate, id, status } = req.body;
    try {
        const order = await getOrder.create({
            product,
            subtotal,
            orderdate,
            estimated_orderdate,
            id,
            status
        });
        res.json(order);
    } catch (err) {
        console.log(err);
    }
}
const getOrder = async (req, res) => {
    try {
        const order = await getOrder.find();
        res.json(order);
    } catch (err) {
        console.log(err);
    }
}
module.exports = { addOrder, getOrder };