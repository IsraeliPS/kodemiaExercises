const express = require("express");
const jwt = require("../lib/jwt.js");
const users = require("../usecases/users");
const moment=require('moment');

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { username, password } = req.body;

  const user = await users.getByUser(username);

  const isMatch = await users.authenticate(user, password);

  if (isMatch) {
    const payload = {
      sub: user._id,
      role: user.role,
      iat: moment().unix(),
      exp: moment().add(14, "days").unix()
    };

    const token = await jwt.sign(payload);

    res.status(200).json({
      ok: true,
      message: "Sign in successful!",
      payload: {
        token,
      },
    });
  } else {
    res.status(401).json({
      ok: false,
      message: "Password missmatch",
    });
  }
});

module.exports = router;