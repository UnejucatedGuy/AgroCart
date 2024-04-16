const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const passport = require("passport");
require("./config/conn");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// app.use("/public",express.static(path.join(__dirname, "public")));
app.use("/public", express.static("public"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Initialize Passport
app.use(passport.initialize());

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
