const LandingPageData = require("../models/LandingPage");

const updateData = async (req, res) => {
  try {
    console.log("check", req.body);
    const update = await LandingPageData.findById({
      _id: "62820ff8576a0146834ec60c",
    });
    const updated = await update.update({
      // verified: req.body.verified,

      title: req.body.title,
      text: req.body.text,
      roadTitle: req.body.roadTitle,
      roadText: req.body.roadText,
      nftTitle: req.body.nftTitle,
      nftText: req.body.nftText,
      image: req.body.image,
      carousel: req.body.carousel,
      moderatorData: req.body.moderatorData,
      Nft: req.body.Nft,
    });
    //   const edited = await Customer.findById({
    //     _id: req.body.userid,
    //   });
    res.status(201).json({
      message: "Status updated Nft=========",

      updated,
    });
  } catch (err) {
    console.error(err);
  }
};
const getData = async (req, res, next) => {
  console.log("dfsdfsdfjkdhkwwww");
  try {
    let data = await LandingPageData.findOne({
      _id: "62820ff8576a0146834ec60c",
    });
    if (data) {
      return res.status(200).json({
        data: data,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};
module.exports = { updateData, getData };
