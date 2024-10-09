const express = require("express");
const serviceControllers = require("../controllers/genesisService.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const serviceRouter = express.Router();
const serviceEndPoints = apiEndPoints.service;

serviceRouter.post(
  serviceEndPoints.createService,
  serviceControllers.createService
);
serviceRouter.get(
  serviceEndPoints.showServices,
  serviceControllers.getAllServices
);
serviceRouter.put(
  serviceEndPoints.updateservice,
  serviceControllers.updateService
);
serviceRouter.delete(
  serviceEndPoints.deleteService,
  serviceControllers.deleteService
);

module.exports = serviceRouter;
