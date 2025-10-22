const Complaints = require("../../models/Complaint-schema");
const Officers = require("../../models/Authentication/Officer-schema");

const mongoose = require("mongoose");
exports.returnDashboard = async (req, res) => {
  try {
    const complaints = await Complaints.find({});
    const officers = await Officers.find({});

    res.render("AdminDashboard", { complaints, officers });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
