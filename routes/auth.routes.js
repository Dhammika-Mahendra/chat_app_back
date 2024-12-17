const express = require("express");
const { loginUser, logoutUser, signupUser } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/signup", signupUser);

router.get("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
