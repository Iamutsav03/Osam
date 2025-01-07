const bcrypt = require("bcrypt");
const {createToken} = require("../authentication/TokenAuthentication")

const HashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (err) {
    return new Error("Failed to hash password");
  }
};

const ComparePassword = async (userEmail, password, HashPassword) => {
  try {
    const isMatch = bcrypt.compare(password, HashPassword);
    if (!isMatch) {
      throw new Error("Invalid Password");
    }
    const token = createToken(userEmail);
    return token;
  } catch (err) {
    return new Error(err);
  }
};

module.exports = { HashPassword, ComparePassword };