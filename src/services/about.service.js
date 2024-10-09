const mongoose = require("mongoose");
const aboutModel = require("../models/about.model");
const ObjectId = mongoose.Types.ObjectId;

const createAboutIntoDb = async (payload) => {
  const resp = await aboutModel.create(payload);
  return resp;
};

const getAllAboutsFromDb = async () => {
  let data = await aboutModel.find();
  return data;
};

const updateAboutInDb = async (aboutId, payload) => {
  if (!ObjectId.isValid(aboutId)) {
    throw new Error("Invalid about ID");
  }

  const updatedAbout = await aboutModel.findByIdAndUpdate(aboutId, payload, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update operation
  });

  return updatedAbout;
};

const deleteAboutFromDb = async (id) => {
  const deletedAbout = await aboutModel.findByIdAndDelete(id);
  return deletedAbout;
};

const aboutServices = {
  createAboutIntoDb,
  getAllAboutsFromDb,
  updateAboutInDb,
  deleteAboutFromDb,
};

module.exports = aboutServices;
