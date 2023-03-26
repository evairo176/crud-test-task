const express = require("express");

const {
  createAction,
  updateAction,
  deleteAction,
  getUserByIdAction,
  getUserAction,
} = require("../controller/UserController");
const { photoUpload, postImgResize } = require("../middleware/photoUpload");

const userRoute = express.Router();

userRoute.post(
  "/create",
  photoUpload.single("image"),
  // postImgResize,
  createAction
);
userRoute.put("/update", updateAction);
userRoute.delete("/delete/:id", deleteAction);
userRoute.get("/:id", getUserByIdAction);
userRoute.get("/", getUserAction);

module.exports = userRoute;
