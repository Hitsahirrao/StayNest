const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const dashboardController = require("../controllers/dashboard");

router.get("/", isLoggedIn, wrapAsync(dashboardController.showDashboard));

module.exports = router;