const express = require("express");
const { getAllProducts } = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products").post(createProduct);





module.exports = router