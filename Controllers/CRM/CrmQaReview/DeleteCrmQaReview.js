const Qareview = require("../../../Models/CRM/QAReview");

exports.deleteReview = async (req, res, next) => {
  try {
    const id = req.params;

    const reviewToDelete = await Qareview.findByPk(id);

    if (!reviewToDelete) {
      return res.status(404).json({ message: "Review not found" });
    }

    await reviewToDelete.destroy();

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
