const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

const wishlistController = require("../controllers/wishlist");

router.get("/", isLoggedIn, wrapAsync(wishlistController.showWishlist));

router.post("/:id/add", isLoggedIn, wrapAsync(wishlistController.addToWishlist));

router.post("/:id/remove", isLoggedIn, wrapAsync(wishlistController.removeFromWishlist));

module.exports = router;