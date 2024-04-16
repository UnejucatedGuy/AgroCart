const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require("../controllers/productController");
const { authenticateUser } = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./public/images");
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create a new product
router.post("/create", upload.single("image"), productController.createProduct);

// Retrieve a list of all products
router.get("/", productController.getAllProducts);

// Retrieve all products owned by a specific user
router.get("/owner/:ownerId", productController.getProductsByOwner);

// Filter products by category (public route)
//router.get("/filter/category/:category", filterProductsByCategory);

// Sort products by price (public route)
//router.get("/sort/price/:order", sortProductsByPrice);

// Retrieve a single product by ID
router.get("/:productId", productController.getProductById);

// Partially update a product by ID (using PATCH for partial updates)
router.patch(
  "/:productId/update",
  authenticateUser,
  productController.partialUpdateProduct
);

// Delete a product by ID
router.delete(
  "/:productId/delete",
  authenticateUser,
  productController.deleteProduct
);

module.exports = router;
