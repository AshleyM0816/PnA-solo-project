const mongoose = require("mongoose");
const pokemonDB = "pokemonDBNew";

mongoose.connect("mongodb://127.0.0.1:27017", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

    .then(() => {
        console.log('You are connected to the database')
    })
    .catch((err) => {
        console.log('You had a problem connecting to the database. Here is your error:', err)
    })

