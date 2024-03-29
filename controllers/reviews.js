const Review = require("../models/review.js");
const Listing = require("../models/listing");

module.exports.createReview = async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  console.log(newReview);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  // console.log("New Review saved successfully");
  // res.send("New Review saved successfully");
  req.flash("success", "New Review Added!");
  res.redirect(`/listings/${listing.id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};
