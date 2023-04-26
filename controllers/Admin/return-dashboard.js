const Complaints = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
exports.return_dashboard = (req, res) => {
  // res.send("Post")
  Complaints.find((err, doc) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.render("AdminDashboard", { complaints: doc });
    }
  });
};
