const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
  id: { type: String, required: true },
  mailName: { type: String, required: true },
  movieName: { type: String, required: true },
  movieYear: { type: String, required: true },
  movieId: { type: String, required: true },
  movieImage: { type: String, required: true },
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
