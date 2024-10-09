const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const projectModel = mongoose.model("project", DataSchema);
module.exports = projectModel;
