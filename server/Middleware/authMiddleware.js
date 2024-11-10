const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // You can access this in your route controllers
    next(); // Proceed to the next middleware or route handler
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
