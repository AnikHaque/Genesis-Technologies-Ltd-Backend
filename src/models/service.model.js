const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const serviceModel = mongoose.model("service", DataSchema);
module.exports = serviceModel;
