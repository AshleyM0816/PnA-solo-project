const PokemonController = require("../controllers/pokemon.controller");

module.exports = (app) => {
    app.get("/api/pokemon", PokemonController.findAllPokemon);
    app.post("/api/pokemon", PokemonController.createNewPokemon);
    app.get("/api/pokemon/:id", PokemonController.findOnePokemon);
    app.delete("/api/pokemon/:id", PokemonController.deleteOnePokemon);
    app.put("/api/pokemon/:id", PokemonController.updateExistingPokemon);
}