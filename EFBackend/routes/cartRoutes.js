const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Route to add a product to the shopping cart
router.post("/:userId/add", cartController.addToCart);

// Route to get the contents of the shopping cart
router.get("/:userId", cartController.getCartContents);

// Route to update the quantity of a product in the shopping cart
router.put("/:userId/update", cartController.updateCartItemQuantity);

// Route to get an array of products in the shopping cart
router.get("/:userId/products", cartController.getCartProducts);

router.delete("/:userId/clear", cartController.clearCart);

module.exports = router;
