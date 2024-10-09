const mongoose = require("mongoose");
const clientModel = require("../models/clients.model");
const ObjectId = mongoose.Types.ObjectId;
const createClientIntoDb = async (payload) => {
  const resp = await clientModel.create(payload);
  return resp;
};

const getAllClientsFromDb = async () => {
  let data = await clientModel.find();
  return data;
};

const updateClientInDb = async (clientId, payload) => {
  if (!ObjectId.isValid(clientId)) {
    throw new Error("Invalid client ID");
  }

  const updatedClient = await clientModel.findByIdAndUpdate(clientId, payload, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update operation
  });

  return updatedClient;
};

const deleteClientFromDb = async (id) => {
  const deletedClient = await clientModel.findByIdAndDelete(id);
  return deletedClient;
};

const clientServices = {
  createClientIntoDb,
  getAllClientsFromDb,
  updateClientInDb,
  deleteClientFromDb,
};

module.exports = clientServices;
