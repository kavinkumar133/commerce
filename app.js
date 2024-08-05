const express = require("express");
const mongoose = require("mongoose");
const Productrouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes")
const getorderRoutes = require("./routes/getorderRoutes") 
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());

mongoose.connect(
  'mongodb+srv://kavin:admin@cluster0.lb8rdzt.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0' // your mongodb url
).then(() => {
  console.log("Mongodb connected");
});

app.set("view engine", "ejs");
app.use(express.json());

app.use('/', Productrouter);
app.use("/api/user",userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);
app.use('/api/getorder',getorderRoutes)

app.listen(5000, () => {
  console.log("server is running ");
});