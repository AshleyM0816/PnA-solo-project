const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
	name: {
	    type: String,
	    required: [true, "A name is required"],
	    maxlength: [30, "Name should be no more than 30 characters"]
	},
	move_1: {
	    type: String,
	    required: [true, "a move is required"]
	},
    move_2: {
	    type: String,
	    required: [true, "a move is required"]
	},
    move_3: {
	    type: String,
	    required: [true, "a move is required"]
	},
    move_4: {
	    type: String,
	    required: [true, "a move is required"]
	},
    held_item: {
	    type: String,
	    required: [true, "Held item is required"]
	},
    team_name: {
	    type: String,
	    required: [true, "Team name is required"]
	},
    completion_date: {
	    type: String,
	    required: [true, "Completion date is required"]
	},
    game: {
	    type: String,
	    required: [true, "Game is required"]
	},
}, { timestamps: true })

module.exports = mongoose.model("Pokemon", PokemonSchema);