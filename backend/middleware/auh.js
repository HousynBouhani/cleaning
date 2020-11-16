import jwt from "jsonwebtoken";

const authMiddleware = (request, response, next) => {
  //get token from header
  const token = request.header("x-auth-token");

  // check if token is not there

  if (!token) {
    return response.status(401).json({ msg: "No token ,authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.admin = decoded.admin;
    next();
  } catch (error) {
    console.error(error.message);
    response.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;
