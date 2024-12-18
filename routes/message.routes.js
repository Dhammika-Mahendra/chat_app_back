const express = require('express');
const router = express.Router();
const {sendMessage} = require("../controllers/message.controller");
const { protectRoute } = require('../Middleware/ProtectRoute');

router.post("/send/:id",protectRoute,sendMessage)

module.exports = router;