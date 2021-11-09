const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cautionnement: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Annonce", annonceSchema);
