const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware.js");

// Login user (both farmer and customer)
router.post("/login", userController.loginUser);

// Register a new user (both farmer and customer)
router.post("/register", userController.registerUser);

// Retrieve a single user by ID
router.get("/:userId", userController.getUserById);

// // Route for getting the shopping cart of a user
// router.get("/:userId/cart", userController.getShoppingCart);

// // Route for adding a new product to the shopping cart
// router.post("/:userId/cart/add", userController.addToShoppingCart);

module.exports = router;
