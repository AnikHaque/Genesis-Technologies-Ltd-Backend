const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const clientModel = mongoose.model("client", DataSchema);
module.exports = clientModel;
