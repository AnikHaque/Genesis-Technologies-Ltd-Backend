const mongoose = require("mongoose");
const projectModel = require("../models/project.model");
const ObjectId = mongoose.Types.ObjectId;
const createProjectIntoDb = async (payload) => {
  const resp = await projectModel.create(payload);
  return resp;
};

const getAllProjectsFromDb = async () => {
  let data = await projectModel.find();
  return data;
};

const updateProjectInDb = async (projectId, payload) => {
  if (!ObjectId.isValid(projectId)) {
    throw new Error("Invalid project ID");
  }

  const updatedProject = await projectModel.findByIdAndUpdate(
    projectId,
    payload,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    }
  );

  return updatedProject;
};

const deleteProjectFromDb = async (id) => {
  const deletedProject = await projectModel.findByIdAndDelete(id);
  return deletedProject;
};

const projectServices = {
  createProjectIntoDb,
  getAllProjectsFromDb,
  updateProjectInDb,
  deleteProjectFromDb,
};

module.exports = projectServices;
