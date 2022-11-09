const Pokemon = require("../models/pokemon.model");

const createNewPokemon = (req, res) => {
    console.log("test", req.body)
    Pokemon.create(req.body)
    .then((newlyCreatedPokemon) => {
    res.json({ newlyCreatedPokemon });
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
};

const findAllPokemon = (req, res) => {
    Pokemon.find({})
    .then((allPokemon) => {
    res.json(allPokemon);
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

const findOnePokemon = (req, res) => {
    Pokemon.findOne({ _id: req.params.id })
    .then((onePokemon) => {
    res.json(onePokemon);
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

const deleteOnePokemon = (req, res) => {
    Pokemon.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
    res.json({ deletedResponse });
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

const updateExistingPokemon = (req, res) => {
    Pokemon.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedPokemon => {
        res.json({updatedPokemon})
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
}

module.exports = {
    createNewPokemon,
    findAllPokemon,
    findOnePokemon,
    deleteOnePokemon,
    updateExistingPokemon
};

