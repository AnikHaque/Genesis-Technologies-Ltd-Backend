const express = require("express");
const aboutControllers = require("../controllers/about.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const aboutRouter = express.Router();
const aboutEndPoints = apiEndPoints.about;

aboutRouter.post(aboutEndPoints.createAbout, aboutControllers.createAbout);
aboutRouter.get(aboutEndPoints.showAbouts, aboutControllers.getAllAbouts);
aboutRouter.put(aboutEndPoints.updateabout, aboutControllers.updateAbout);
aboutRouter.delete(aboutEndPoints.deleteAbout, aboutControllers.deleteAbout);

module.exports = aboutRouter;
