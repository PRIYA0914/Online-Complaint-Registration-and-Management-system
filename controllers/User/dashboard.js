const Complaint = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
exports.dashboard = (req, res) => {
  // res.send("User DashBoard")
  // res.send(req.paras);
  // console.log(req.params.id);
  // using params.id -- search in database
//   res.render("UserDashboard", { userID: req.params.id });
Complaint.find({ userID: req.params.id }, function (err, docs) {
  if (err) {
    console.log(err);
        res.sendStatus(500);

  } else {

    console.log(docs);
  }
});
};
