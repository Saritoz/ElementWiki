const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      require: true
    },
    description: {
      type: String,
      default: "No data",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Status", StatusSchema);
