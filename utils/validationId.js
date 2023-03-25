const mongoose = require("mongoose");

const validationId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) throw new Error("The id is not valid or found");
};

module.exports = validationId;
