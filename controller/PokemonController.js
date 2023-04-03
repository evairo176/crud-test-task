const expressAsyncHandler = require("express-async-handler");
const Pokemon = require("../model/Pokemon");

const createPokemonAction = expressAsyncHandler(async (req, res) => {
  try {
    const pokemon = await Pokemon.create({
      name: req?.body?.name,
    });

    res.json({
      message: "Create Pokemon Successfully",
      pokemon: pokemon,
    });
  } catch (error) {
    res.json(error);
  }
});

const getAllPokemonAction = expressAsyncHandler(async (req, res) => {
  try {
    const pokemon = await Pokemon.find({});

    res.json({
      message: "Get All Pokemon Successfully",
      pokemon: pokemon,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = { createPokemonAction, getAllPokemonAction };
