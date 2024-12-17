const express = require("express");
const { loginUser, logoutUser, signupUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

module.exports = router;
