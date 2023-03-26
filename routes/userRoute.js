const express = require("express");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const {
  createAction,
  updateAction,
  deleteAction,
  getUserByIdAction,
  getUserAction,
} = require("../controller/UserController");

const userRoute = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

//image resizing
const profilePhotoResize = async (req, res, next) => {
  //check if there no file to resize
  if (!req.file) return next();
  req.file.filename = `user-${Date.now()}-${req.file.originalname}`;

  await sharp(req.file.buffer)
    .resize(200, 200)
    .toFormat("jpeg")
    .jpeg({
      quality: 90,
    })
    .toFile(path.join(`public/data/photo/${req.file.filename}`));
  next();
};

userRoute.post(
  "/create",
  // upload.single("image"),
  // profilePhotoResize,
  createAction
);
userRoute.put(
  "/update",
  upload.single("image"),
  profilePhotoResize,
  updateAction
);
userRoute.delete("/delete/:id", deleteAction);
userRoute.get("/:id", getUserByIdAction);
userRoute.get("/", getUserAction);

module.exports = userRoute;
