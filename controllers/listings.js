const Listing = require("../models/listing");
const User = require("../models/user");

module.exports.index = async (req, res) => {
    const { search, minPrice, maxPrice, sort } = req.query;

    let query = {};

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
        ];
    }

    if (minPrice || maxPrice) {
        query.price = {};

        if (minPrice) {
            query.price.$gte = Number(minPrice);
        }

        if (maxPrice) {
            query.price.$lte = Number(maxPrice);
        }
    }

    let sortOption = {};

    if (sort === "lowToHigh") {
        sortOption.price = 1;
    } else if (sort === "highToLow") {
        sortOption.price = -1;
    }

    const allListings = await Listing.find(query).sort(sortOption);

    res.render("listings/index.ejs", {
        allListings,
        search,
        minPrice,
        maxPrice,
        sort,
    });
}; 

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    if (req.user) {
        await User.findByIdAndUpdate(req.user._id, {
            $pull: { recentlyViewed: id },
        });

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                recentlyViewed: {
                    $each: [id],
                    $position: 0,
                    $slice: 5,
                },
            },
        });
    }

    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req,res, next) => {
        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url, filename};
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== undefined){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};