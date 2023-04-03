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

const releasePokemonAction = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const num = req?.body?.number;

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  if (!isPrime(num)) throw new Error("Failed release because not prime number");
  //   console.log(isPrime());
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(
      id,
      {
        release: true,
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Release Pokemon Successfully",
      pokemon: pokemon,
    });
  } catch (error) {
    res.json(error);
  }
});

const renamePokemonAction = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const name = req?.body?.name;

  try {
    const pokemon = await Pokemon.findByIdAndUpdate(
      id,
      {
        name: name,
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Rename Pokemon Successfully",
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

module.exports = {
  createPokemonAction,
  getAllPokemonAction,
  releasePokemonAction,
  renamePokemonAction,
};
