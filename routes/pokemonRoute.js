const express = require("express");
const {
  createPokemonAction,
  getAllPokemonAction,
  releasePokemonAction,
  renamePokemonAction,
} = require("../controller/PokemonController");

const pokemonRoute = express.Router();

pokemonRoute.post("/create", createPokemonAction);
pokemonRoute.get("/", getAllPokemonAction);
pokemonRoute.post("/release/:id", releasePokemonAction);
pokemonRoute.post("/rename/:id", renamePokemonAction);

module.exports = pokemonRoute;
