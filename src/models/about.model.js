const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    headline: { type: String, required: true },
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    image: { type: String, required: true },
    missionTitle: { type: String, required: true },
    missionImg: { type: String, required: true },
    mottoTitle: { type: String, required: true },
    mottoImg: { type: String, required: true },
    conclusionTitle: { type: String, required: true },
    conclusionImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const aboutModel = mongoose.model("about", DataSchema);
module.exports = aboutModel;
