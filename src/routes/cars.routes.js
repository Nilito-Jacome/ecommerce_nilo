const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");

const {
  addProductToCar,
  buyProductsInCar,
  CompletedOrder,
  CompletedPurchased,
  ProductInToCar,
  AllOrderForUser,
} = require("../controllers/car.controllers");

const router = Router();

router.post("/products/car/:id", authenticate, addProductToCar);
router.post("/products/order/", authenticate, buyProductsInCar);
router.put("/orders/:id", authenticate, CompletedOrder);
router.put("/productsincar/:id", authenticate, CompletedPurchased);
router.get("/productsincar/:id", authenticate, ProductInToCar);
router.get("/orders/:id", AllOrderForUser);

module.exports = router;
