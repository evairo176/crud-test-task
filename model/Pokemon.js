const { default: mongoose } = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "name is required"],
      type: String,
    },
    release: {
      type: Boolean,
      default: false,
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

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
