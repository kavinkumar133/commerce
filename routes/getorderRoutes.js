const express = require("express")
const router = express.Router()
const orderController = require("../controller/orderController")

router.post('/add', orderController.addOrder);
router.get('/get', orderController.getOrder);

module.exports = router;