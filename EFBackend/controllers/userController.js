const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Retrieve a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).exec();

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Register a new user (both farmer and customer)
exports.registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const {
      email,
      password,
      role,
      name,
      phoneNumber,
      storeName,
      storeDescription,
    } = req.body;

    // Check if the user already exists
    const existingEmail = await User.findOne({ email });
    const existingPhoneNumber = await User.findOne({ phoneNumber });

    if (existingEmail) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (existingPhoneNumber) {
      return res.status(400).json({ message: "Use a different phone number" });
    }

    // Hash the password
    //const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password,
      role, // Role can be 'farmer' or 'customer'
      name, // Required name field
      phoneNumber,
      storeName,
      storeDescription,
    });

    // Save the user to the database
    await newUser.save();

    // Create and send a JWT token for authentication
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(201).json({ token, userId: newUser._id, role: newUser.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid pass" });
    }

    // Create and send a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token, userId: user._id, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// exports.getShoppingCart = async (req, res) => {
//   try {
//     const userId = req.params.userId; // Assuming userId is part of the route params

//     // Find the user by their ID
//     const user = await User.findById(userId).populate("shoppingCart.product");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the user has a shopping cart
//     if (!user.shoppingCart) {
//       return res
//         .status(404)
//         .json({ message: "Shopping cart not found for this user" });
//     }

//     // Return the shopping cart data
//     res.status(200).json(user.shoppingCart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Controller to add a new product to the user's shopping cart
// exports.addToShoppingCart = async (req, res) => {
//   try {
//     const userId = req.params.userId; // Assuming userId is part of the route params
//     const productId = req.body.productId; // Assuming productId is part of the request body
//     const quantity = req.body.quantity; // Assuming quantity is part of the request body

//     // Find the user by their ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the user has a shopping cart
//     if (!user.shoppingCart) {
//       user.shoppingCart = [];
//     }

//     // Add the new product to the shopping cart
//     user.shoppingCart.push({ product: productId, quantity });

//     // Save the updated user data
//     await user.save();

//     // Return a success response
//     res
//       .status(200)
//       .json({ message: "Product added to shopping cart successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
