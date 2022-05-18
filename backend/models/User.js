const bycrpt = require("bcryptjs");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.methods.encryptPassword = async function (password) {
  let hashPassword = await bycrpt.hash(password, 10);
  return hashPassword;
};
UserSchema.methods.decryptPassword = async function (password, hashPassword) {
  let validPassword = await bycrpt.compare(password, hashPassword);

  return validPassword;
};

module.exports.User = mongoose.model("login", UserSchema);
