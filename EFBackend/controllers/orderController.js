const Order = require("../models/order"); // Import your Order model

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, farmerId, products, totalAmount } = req.body;

    const order = new Order({
      farmerId,
      userId,
      products,
      totalAmount,
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a list of all orders, sorted by date
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: "asc" }).exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get details of a specific order by ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).exec();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a list of orders for a specific customer
exports.listCustomerOrders = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const orders = await Order.find({ customer: customerId })
      .sort({ orderDate: "asc" })
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a list of orders by a specific owner
exports.listFarmerOrders = async (req, res) => {
  try {
    const farmerId = req.params.farmerId;
    const orders = await Order.find({ farmerId: farmerId })
      .populate("userId", "name phoneNumber")
      .populate("products.product")
      .sort({ orderDate: "asc" })
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Filter and sort orders by status
exports.filterOrdersByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const orders = await Order.find({ orderStatus: status })
      .sort({ orderDate: "asc" })
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateOrderStatusToDelivered = async (req, res) => {
  try {
    const orderId = req.params.orderId; // Assuming 'orderId' is part of the route parameters

    // Find the order by its ID and update the status to 'Delivered'
    const order = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: "Delivered" },
      { new: true } // This option ensures the updated document is returned
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// const Order = require("../models/order"); // Import your Order model

// // Create a new order
// exports.createOrder = async (req, res) => {
//   try {
//     const { customer, products } = req.body;

//     const order = new Order({
//       customer,
//       products,
//     });

//     const savedOrder = await order.save();

//     res.status(201).json(savedOrder);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get a list of all orders, sorted by date
// exports.listOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ orderDate: "asc" }).exec();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get details of a specific order by ID
// exports.getOrderById = async (req, res) => {
//   try {
//     const orderId = req.params.orderId;
//     const order = await Order.findById(orderId).exec();
//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.status(200).json(order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get a list of orders for a specific customer
// exports.listCustomerOrders = async (req, res) => {
//   try {
//     const customerId = req.params.customerId;
//     const orders = await Order.find({ customer: customerId }).exec();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get a list of orders by a specific owner
// exports.listOwnerOrders = async (req, res) => {
//   try {
//     const ownerId = req.params.ownerId;
//     const orders = await Order.find({ owner: ownerId })
//       .sort({ orderDate: "asc" })
//       .exec();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Filter and sort orders by status
// exports.filterOrdersByStatus = async (req, res) => {
//   try {
//     const { status } = req.params;
//     const orders = await Order.find({ orderStatus: status })
//       .sort({ orderDate: "asc" })
//       .exec();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
