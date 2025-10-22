const express = require("express");
const router = express.Router();
const returnDashboard = require("../../controllers/Admin/return-dashboard");

// Incorrect: router.post('/', returnDashboard);  // This passes the module, not the function
// Correct:
router.post("/", returnDashboard.returnDashboard);

module.exports = router;
