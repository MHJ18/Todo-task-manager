const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Notebook:intelcorei5@newcluster.6iy5oum.mongodb.net/test";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
