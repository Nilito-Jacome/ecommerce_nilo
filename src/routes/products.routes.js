const { Router } = require("express");
const { getAllProducts, createProducts, UpdateDescriptionPriceToProduct} = require("../controllers/products.controllers");
const authenticate = require("../middlewares/auth.middleware");
const router = Router();

router.get("/products", authenticate, getAllProducts);
router.post("/products", authenticate, createProducts);
router.put("/products/:id", authenticate, UpdateDescriptionPriceToProduct);

module.exports = router;
