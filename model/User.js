const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "name is required"],
      type: String,
    },
    profilePhoto: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg",
    },
    birthday: Date,
    age: {
      required: [true, "age is required"],
      type: Number,
    },
    city: {
      required: [true, "city is required"],
      type: String,
    },
    phone: {
      required: [true, "phone is required"],
      type: String,
    },
    education: {
      required: [true, "education is required"],
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
