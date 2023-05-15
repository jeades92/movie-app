const db = require("../config/connection");
const { Movie } = require("../models");
const movieSeeds = require("./movieSeeds.json");

db.once("open", async () => {
  try {
    await Movie.deleteMany({});
    await Movie.create(movieSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
