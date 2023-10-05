const express = require("express");
const {
  getUsers,
  getAllUsers,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

const router = express.Router();

router
  .post("/", createUser)
  .get("/", getAllUsers)
  .get("/:id", getUsers)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

exports.router = router;
