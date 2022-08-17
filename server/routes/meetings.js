const express = require("express");
const router = express.Router();
const { getMeetings, addMeeting } = require("../controllers/meetings");

router.route("/").get(getMeetings);
router.route("/add").post(addMeeting);

module.exports = router;
