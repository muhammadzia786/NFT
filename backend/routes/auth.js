const express = require("express");
const { User } = require("../models/User");
// const loginControllors = require("../controllers/loginControllers");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = await user.encryptPassword(req.body.password);
  await user.save();
  res.status(200).send(user);
});

/* GET home page. */
router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    console.log("mnjnj", req.body);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User does not exist");
    const isValid = await user.decryptPassword(
      req.body.password,
      user.password
    );
    console.log("zia", isValid);

    if (isValid) {
      // const token = jwt.sign({ user }, process.env.PRIVATE_KEY);
      // const token = jwt.sign({ user }, process.env.SECRET_KEY);
      const token = jwt.sign({ user }, "jhadsfh");

      res.status(200).send({ token, message: "Successfull Login" });
    } else {
      res.status(400).send("Password Incorrect");
    }
  } catch (err) {
    res.status(400).send("Internal server error");
  }
});

module.exports = router;
