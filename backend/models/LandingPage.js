const mongoose = require("mongoose");

const LandingPageSchema = mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  roadTitle: {
    type: String,
  },
  roadText: {
    type: String,
  },
  nftTitle: {
    type: String,
  },
  nftText: {
    type: String,
  },
  image: {
    type: String,
  },

  carousel: { type: Array, default: [] },
  moderatorData: { type: Array, default: [] },
  Nft: {
    type: Object,
  },
});
module.exports = mongoose.model("nft", LandingPageSchema);
