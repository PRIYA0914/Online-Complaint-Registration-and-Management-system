const express = require("express");
const router = express.Router();
const complaintForm = require("../../controllers/User/complaintForm-get");
router.get("/:id/register-complaint", complaintForm.complaintForm);
module.exports = router;
