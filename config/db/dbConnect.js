const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.log("Error: " + error.message);
  }
};
// R0NLT5NFvy1Qlmgg
module.exports = dbConnect;
