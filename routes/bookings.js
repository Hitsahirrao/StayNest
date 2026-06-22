const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const bookingController = require("../controllers/bookings");

router.get("/", isLoggedIn, wrapAsync(bookingController.myBookings));
router.post("/:id", isLoggedIn, wrapAsync(bookingController.createBooking));
router.post("/:id/cancel", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;