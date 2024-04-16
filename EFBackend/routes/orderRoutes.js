const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authMiddleware"); // Import your authentication middleware
const {
  createOrder,
  listOrders,
  getOrderById,
  listCustomerOrders,
  listFarmerOrders,
  updateOrderStatusToDelivered,
} = require("../controllers/orderController"); // Import your order controller

// Create a new order (authenticated route)
router.post("/create", createOrder);

// Get a list of all orders (authenticated route)
router.get("/list", listOrders);

// Get details of a specific order by ID (authenticated route)
router.get("/:orderId", authenticateUser, getOrderById);

// Get a list of orders for a specific customer (authenticated route)
router.get("/customer/:customerId", authenticateUser, listCustomerOrders);

// Get a list of orders by a specific owner
router.get("/farmer/:farmerId", listFarmerOrders);

// Update the order status to 'Delivered'
router.put("/:orderId/delivered", updateOrderStatusToDelivered);

// Filter and sort orders by status (authenticated route)
//router.get("/filter/status/:status", authenticateUser, filterOrdersByStatus);

module.exports = router;
