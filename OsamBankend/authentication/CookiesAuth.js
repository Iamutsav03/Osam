const {verifyToken} = require('./TokenAuthentication');

const CheckForAuthCookies = (req, res, next) => {
    const token = req.cookies.token;
    console.log(req);
    if (!token) {
      res.status(401).json({ error: "Unauthorized Access!" });
      return next();
    }
    try {
      const user = verifyToken(token);
      if (!user) {
        return res.status(401).json({ error: "Unauthorized Access!" });
      }
      req.user = user;
      next();
    } catch (error) {
      return next();
    }
  };
  
  module.exports = CheckForAuthCookies;