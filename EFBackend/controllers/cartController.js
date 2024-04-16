const ShoppingCart = require("../models/shoppingCart");

// Controller to add a product to the shopping cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming userId is part of the route parameters
    const { productId, quantity } = req.body;

    const cart = await ShoppingCart.findOne({ user: userId });

    if (!cart) {
      // If the user's shopping cart doesn't exist, create one
      const newCart = new ShoppingCart({
        user: userId,
        products: [{ product: productId, quantity }],
      });
      await newCart.save();
    } else {
      // If the user's shopping cart exists, update it
      const existingProductIndex = cart.products.findIndex((item) =>
        item.product.equals(productId)
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        cart.products[existingProductIndex].quantity = quantity;
      } else {
        // If the product doesn't exist in the cart, add it
        cart.products.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.status(200).json({
      message: "Product added to the shopping cart successfully",
      products: cart.products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller to get the shopping cart contents
exports.getCartContents = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming userId is part of the route parameters

    const cart = await ShoppingCart.findOne({ user: userId });

    if (!cart) {
      return res
        .status(404)
        .json({ message: "Shopping cart not found for this user" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getCartProducts = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming userId is part of the route parameters
    const cart = await ShoppingCart.findOne({ user: userId }).populate(
      "products.product",
      "name price imageUrl description unit"
    ); // Populate the 'product' field with specific fields

    if (!cart) {
      return res
        .status(404)
        .json({ message: "Shopping cart not found for this user" });
    }

    res.status(200).json(cart.products); // Now the 'products' array will contain the populated product information
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller to update the quantity of a product in the shopping cart
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming userId is part of the route parameters
    const { productId, quantity } = req.body;

    const cart = await ShoppingCart.findOne({ user: userId });

    if (!cart) {
      return res
        .status(404)
        .json({ message: "Shopping cart not found for this user" });
    }

    const productInCart = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (!productInCart) {
      return res
        .status(404)
        .json({ message: "Product not found in the shopping cart" });
    }

    productInCart.quantity = quantity;

    await cart.save();

    res.status(200).json({ message: "Product quantity updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller to clear the shopping cart
exports.clearCart = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming userId is part of the route parameters

    const cart = await ShoppingCart.findOne({ user: userId });

    if (!cart) {
      return res
        .status(404)
        .json({ message: "Shopping cart not found for this user" });
    }

    // Clear the products array in the shopping cart
    cart.products = [];

    await cart.save();

    res.status(200).json({ message: "Shopping cart cleared successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
