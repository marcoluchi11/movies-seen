require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const cors = require("cors");
const moviesModel = require("./models/Movies");
app.use(cors());
app.use(express.json());
mongoose.connect(
  `mongodb+srv://marcoluchi11:${process.env.MONGO_PASSWORD}}@movies-seen.vmoqv.mongodb.net/?retryWrites=true&w=majority`,

  {
    useNewUrlParser: true,
  }
);
app.get("/", async (req, res) => {
  res.status(200).send({ message: "It Works!" });
});
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
  if (req.query.user) {
    moviesModel.find({ mailName: email }, (err, result) => {
      if (err)
        res.status(500).send({ message: "There was an error on server" });
      res.status(200).send(result);
    });
  } else {
    moviesModel.find({}, (err, result) => {
      if (err)
        res.status(500).send({ message: "There was an error on server" });
      res.status(200).send(result);
    });
  }
});
app.delete("/delete/:id", (req, res) => {
  moviesModel.findOneAndDelete({ id: req.params.id }).exec();
  res.status(200).send("Deleted!");
});

// const id = req.params.id;
// ZH=]V3tm#@>y$TnB
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
