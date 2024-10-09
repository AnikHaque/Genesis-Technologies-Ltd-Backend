const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    headline: { type: String, required: true },
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const aboutModel = mongoose.model("about", DataSchema);
module.exports = aboutModel;
