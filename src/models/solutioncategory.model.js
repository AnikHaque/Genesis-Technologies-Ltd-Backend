const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    solutioncategoryName: { type: String, unique: true, required: true },
    solutioncategoryImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const solutioncategoryModel = mongoose.model("solutioncategories", DataSchema);
module.exports = solutioncategoryModel;
