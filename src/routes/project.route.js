const express = require("express");
const projectControllers = require("../controllers/project.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const projectRouter = express.Router();
const projectEndPoints = apiEndPoints.project;

projectRouter.post(
  projectEndPoints.createProject,
  projectControllers.createProject
);
projectRouter.get(
  projectEndPoints.showProjects,
  projectControllers.getAllProjects
);
projectRouter.put(
  projectEndPoints.updateproject,
  projectControllers.updateProject
);
projectRouter.delete(
  projectEndPoints.deleteProject,
  projectControllers.deleteProject
);

module.exports = projectRouter;
