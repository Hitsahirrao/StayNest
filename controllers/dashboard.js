const Listing = require("../models/listing");
const User = require("../models/user");
const Booking = require("../models/bookings");

module.exports.showDashboard = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId)
    .populate("wishlist")
    .populate("recentlyViewed");

  const myListings = await Listing.find({ owner: userId });

  const bookings = await Booking.find({ guest: userId })
    .populate("listing")
    .sort({ createdAt: -1 })
    .limit(5);

  res.render("dashboard/index.ejs", {
    user,
    myListings,
    bookings,
  });
};