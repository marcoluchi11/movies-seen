require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const moviesModel = require("./models/Movies");

app.use(cors());
app.use(express.json());
mongoose.connect(
  `mongodb+srv://marcoluchi11:${process.env.MONGO_PASSWORD}@movies-seen.vmoqv.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
app.post("/insert", async (req, res) => {
  const movieInstance = new moviesModel({
    id: req.body.id,
    mailName: req.body.mailName,
    movieName: req.body.Title,
    movieYear: req.body.Year,
    movieId: req.body.imdbID,
    movieImage: req.body.Poster,
  });
  try {
    await movieInstance.save();
    res.status(200).send("Inserted data");
  } catch (err) {
    res.status(500).send({ message: "There was an error on server" });
  }
});
app.get("/read", async (req, res) => {
  const email = req.query.user;
  moviesModel.find({ mailName: email }, (err, result) => {
    if (err) res.status(500).send({ message: "There was an error on server" });
    res.status(200).send(result);
  });
});
app.delete("/delete/:id", (req, res, next) => {
  console.log(req.params.id);
  moviesModel.findOneAndDelete({ id: req.params.id }).exec();
});

// const id = req.params.id;
// ZH=]V3tm#@>y$TnB
app.listen(3001, () => {
  console.log("Server up and running on port 3001 holis");
});
