const express = require("express");

const router = express.Router();

const system = require("../controllers/SystemController");
const contact = require("./contact");

router.get("/", system.home);

router.get("/health", system.health);

router.use("/contact", contact);

module.exports = router;