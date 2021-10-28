const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./auth");

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  console.log("entro a raiz");
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/logout", (req, res) => {
  console.log("salio");
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

app.listen(5000, () => console.log("listening on port: 5000"));
// const {google}=require('googleapis')

// const {OAuth2}=google.auth

//ClientePruebasGoogleCalendar
//779496293352-fluu4c7n5dct20q4fo1lhai5clffkfbd.apps.googleusercontent.com
