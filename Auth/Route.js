const express = require("express");
const router = express.Router();

const { register, login, updateUsers, deleteUser, getUsers } = require("./auth");
const { adminAuth } = require("../middleware/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUsers").put(adminAuth, updateUsers);
router.route("/deleteUser").delete(adminAuth, deleteUser);
router.route("/getUsers").get(getUsers);

module.exports = router;