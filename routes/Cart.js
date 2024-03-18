const express = require("express");
const { addToCart, fetchCartByUser, deleteFormCart, updateCart } = require("../controller/Cart");

const router = express.Router();

// /carts is already added in base path
router.post("/", addToCart)
      .get("/", fetchCartByUser)
      .delete("/:id", deleteFormCart)
      .patch("/:id", updateCart)

exports.router = router;
