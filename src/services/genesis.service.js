const mongoose = require("mongoose");
const serviceModel = require("../models/service.model");
const ObjectId = mongoose.Types.ObjectId;
const createServiceIntoDb = async (payload) => {
  const resp = await serviceModel.create(payload);
  return resp;
};

const getAllServicesFromDb = async () => {
  let data = await serviceModel.find();
  return data;
};

const updateServiceInDb = async (serviceId, payload) => {
  if (!ObjectId.isValid(serviceId)) {
    throw new Error("Invalid service ID");
  }

  const updatedService = await serviceModel.findByIdAndUpdate(
    serviceId,
    payload,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    }
  );

  return updatedService;
};

const deleteServiceFromDb = async (id) => {
  const deletedService = await serviceModel.findByIdAndDelete(id);
  return deletedService;
};

const serviceServices = {
  createServiceIntoDb,
  getAllServicesFromDb,
  updateServiceInDb,
  deleteServiceFromDb,
};

module.exports = serviceServices;
