const mongoose = require("mongoose");

const elementsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    about: {
      type: String,
      require: true,
    },
    weakness: {
      type: String,
      require: true,
    },
    stronger: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "No data",
    },
    abilities: {
      type: String,
      default: "No data",
    },
    enemies: {
      type: String,
      default: "No data",
    },
    summon: {
      type: String,
      default: "No data",
    },
    color: {
      type: String,
      default: "#000000"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Elements", elementsSchema);
