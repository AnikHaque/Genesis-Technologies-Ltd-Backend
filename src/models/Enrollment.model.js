const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const enrollmentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    transactionId: { type: String, required: true },
    image: { type: String, required: true },
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
); // Include timestamps to track creation and update times

const enrollmentModel = model("enrollments", enrollmentSchema);

module.exports = enrollmentModel;
