const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createToken = (user) => {
  const token = JWT.sign(
    { id: user._id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "3d",
    }
  );
  return token;
};

const verifyToken = (token) => {
    try {
        const user = JWT.verify(token, process.env.SECRET_KEY);
        return user;
    } catch (error) {
        console.log("Verifiaction Failed :", error.message);
    }
}

module.exports = { createToken, verifyToken };