const mongoose = require("mongoose");
const solutioncategoryModel = require("../models/solutioncategory.model");
const ObjectId = mongoose.Types.ObjectId;
const createSolutioncategoryIntoDb = async (payload) => {
  const resp = await solutioncategoryModel.create(payload);
  return resp;
};

const getAllSolutioncategorysFromDb = async () => {
  let data = await solutioncategoryModel.find();
  return data;
};

const updateSolutioncategoryInDb = async (solutioncategoryId, payload) => {
  if (!ObjectId.isValid(solutioncategoryId)) {
    throw new Error("Invalid solutioncategory ID");
  }

  const updatedSolutioncategory = await solutioncategoryModel.findByIdAndUpdate(
    solutioncategoryId,
    payload,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    }
  );

  return updatedSolutioncategory;
};

const deleteSolutioncategoryFromDb = async (id) => {
  const deletedSolutioncategory = await solutioncategoryModel.findByIdAndDelete(
    id
  );
  return deletedSolutioncategory;
};

const solutioncategoryServices = {
  createSolutioncategoryIntoDb,
  getAllSolutioncategorysFromDb,
  updateSolutioncategoryInDb,
  deleteSolutioncategoryFromDb,
};

module.exports = solutioncategoryServices;
