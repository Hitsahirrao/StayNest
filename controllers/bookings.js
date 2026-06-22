const Booking = require("../models/bookings");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut } = req.body;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    req.flash("error", "Check-out date must be after check-in date.");
    return res.redirect(`/listings/${id}`);
  }

  const overlappingBooking = await Booking.findOne({
    listing: id,
    status: "confirmed",
    checkIn: { $lt: end },
    checkOut: { $gt: start },
  });

  if (overlappingBooking) {
    req.flash("error", "This listing is already booked for selected dates.");
    return res.redirect(`/listings/${id}`);
  }

  const booking = new Booking({
    listing: id,
    guest: req.user._id,
    checkIn: start,
    checkOut: end,
    totalPrice: nights * listing.price,
  });

  await booking.save();

  req.flash("success", "Booking confirmed!");
  res.redirect("/bookings");
};

module.exports.myBookings = async (req, res) => {
  const bookings = await Booking.find({ guest: req.user._id })
    .populate("listing")
    .sort({ createdAt: -1 });

  res.render("bookings/index.ejs", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
  const { id } = req.params;

  await Booking.findByIdAndUpdate(id, { status: "cancelled" });

  req.flash("success", "Booking cancelled!");
  res.redirect("/bookings");
};