const express = require("express");
const router = express.Router();
const add_complaint = require("../../controllers/User/add-complaint");
router.post("/", add_complaint.addComplaint);
module.exports = router;
