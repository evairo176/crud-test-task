const expressAsyncHandler = require("express-async-handler");
const User = require("../model/User");
const validationId = require("../utils/validationId");
const fs = require("fs");
const cloudinaryUploadImg = require("../utils/cloudinary");

//----------------------------------------------
// create user
//----------------------------------------------
const createAction = expressAsyncHandler(async (req, res) => {
  // 1. get the path to img

  const imgUpload = await cloudinaryUploadImg(req.file.path);

  try {
    const user = await User.create({
      name: "Dicki Prasetya",
      birthday: "2023-03-24T07:52:52.291Z",
      city: "Indramayu",
      age: 18,
      phone: "08182912819",
      education: "D3 teknik informatika",
      profilePhoto: JSON.stringify(imgUpload),
    });

    res.json({
      message: "Create Successfully",
      user: user,
    });
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------
// update user
//----------------------------------------------

const updateAction = expressAsyncHandler(async (req, res) => {
  const id = req?.body?.id;

  validationId(id);
  let image = "";
  const user = await User.findById(id);

  if (req.file) {
    fs.unlinkSync(`public/data/photo/${user.profilePhoto}`);
    image = req.file.filename;
  } else {
    image = user.profilePhoto;
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        name: req?.body?.name,
        birthday: req?.body?.birthday,
        city: req?.body?.city,
        age: req?.body?.age,
        phone: req?.body?.phone,
        education: req?.body?.education,
        profilePhoto: image,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Update Successfully",
      updateUser: updateUser,
    });
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------
// delete user
//----------------------------------------------

const deleteAction = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // check id
  validationId(id);

  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({
      message: "Delete Successfully",
      deleteUser: deleteUser,
    });
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------
// get user by id
//----------------------------------------------

const getUserByIdAction = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // check id
  validationId(id);

  try {
    const user = await User.findById(id);
    res.json({
      message: "Fetch user by id Successfully",
      user: user,
    });
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------
// get user
//----------------------------------------------

const getUserAction = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.find({});
    res.json({
      message: "Fetch Successfully",
      user: user,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createAction,
  updateAction,
  deleteAction,
  getUserByIdAction,
  getUserAction,
  getUserAction,
};
