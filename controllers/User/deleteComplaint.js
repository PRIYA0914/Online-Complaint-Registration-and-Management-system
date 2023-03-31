const Complaint = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
exports.deleteComplaint = (req, res) => {
  // res.send(req.params.id)
  Complaint.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }else{
res.redirect("back");

        console.log("Complaint Deleted Successfully");
    }
  });
};
