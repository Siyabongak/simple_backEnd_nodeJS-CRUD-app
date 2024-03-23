const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
//middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello world, hello friends");
});
//connecting to our mongoDB databse
mongoose
  .connect(
    "mongodb+srv://SiyaUmbulazi:siyabonga@cluster0.izolkpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("Could not connect");
  });

app.listen(3000, () => {
  console.log("server running at port 3000");
});
