const express = require("express");
const router = express.Router();
const { updateData, getData } = require("../controllers/landingPage");

router.patch("/updateData", updateData);
router.get("/getData", getData);

module.exports = router;
