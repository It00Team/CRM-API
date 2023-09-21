const Qareview = require("../../../Models/CRM/QAReview");

exports.get_one_QaReview = async (req, res, next) => {
  try {
    const id = req.params;
    const qaReview = await Qareview.findByPk(id);
    if (!qaReview) {
      return res.status(404).json({ message: "QA review not found" });
    }
    res.status(200).json(qaReview); // Respond with the QA review
  } catch (error) {
    next(error);
  }
};


exports.get_all_reviews =async(req, res, next)=>{
  try {
    
    const review = await Qareview.findAll()
    res.json(review)
  } catch (error) {
    console.log(error)
    next(error)
  }
}