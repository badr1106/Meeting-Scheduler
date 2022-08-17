const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/update/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
