const express = require("express");
const {
  createPokemonAction,
  getAllPokemonAction,
} = require("../controller/PokemonController");

const pokemonRoute = express.Router();

pokemonRoute.post("/create", createPokemonAction);
pokemonRoute.get("/", getAllPokemonAction);

module.exports = pokemonRoute;
