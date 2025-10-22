const Admin = require("../../models/Authentication/Admin-schema");
const Officers = require("../../models/Authentication/Officer-schema");
const Complaints = require("../../models/Complaint-schema");
const mongoose = require("mongoose");

exports.login = async (req, res) => {
    try {
        const admins = await Admin.find({});
        const complaints = await Complaints.find({});
        const officers = await Officers.find({});

        if (admins.length > 0 && admins[0].name === req.body.name && admins[0].password === req.body.password) {
            res.render("AdminDashboard", { complaints: complaints, officers: officers });
        } else {
            res.sendFile(__dirname + "/unauthorized.html");
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};