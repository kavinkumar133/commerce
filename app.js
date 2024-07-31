const express = require("express");
const mongoose = require("mongoose");
const Productrouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");
const app = express();

mongoose.connect(
  'mongodb+srv://kavin:admin@cluster0.lb8rdzt.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0' // your mongodb url
).then(() => {
  console.log("Mongodb connected");
});

app.set("view engine", "ejs");
app.use(express.json());

app.use('/', Productrouter);
app.use("/api/user",userRouter);
app.use("/api/cart", cartRouter);

app.listen(5000, () => {
  console.log("server is running ");
});