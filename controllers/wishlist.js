const User = require("../models/user");
const Listing = require("../models/listing");

module.exports.addToWishlist = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }

    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(id)) {
        user.wishlist.push(id);
        await user.save();
        req.flash("success", "Added to wishlist!");
    } else {
        req.flash("error", "Already in wishlist!");
    }

    res.redirect(`/listings/${id}`);
};

module.exports.removeFromWishlist = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndUpdate(req.user._id, {
        $pull: { wishlist: id },
    });

    req.flash("success", "Removed from wishlist!");
    res.redirect("/wishlist");
};

module.exports.showWishlist = async (req, res) => {
    const user = await User.findById(req.user._id).populate("wishlist");

    res.render("wishlist/index.ejs", {
        wishlist: user.wishlist,
    });
};

