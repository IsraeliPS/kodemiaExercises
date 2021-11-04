const jwt = require("../lib/jwt");

const authHandler = async (req, res, next) => {
  try {
    const { token } = req.headers;

    const payload = await jwt.verify(token);
    next(payload);
  } catch (err) {
    res.status(403).json({
      status: false,
      message: "Invalid token",
      error: err,
    });
  }
};

const permissionHandler = async (payload,req,res,next) => {
  console.log("payload: ", payload);
  next();
  //si tiene rol de admin dejarlo pasar
  //si tiene rol de usuario arroja error
};

module.exports = { authHandler, permissionHandler };
