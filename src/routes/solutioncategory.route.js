const express = require("express");
const solutioncategoryControllers = require("../controllers/solutioncategory.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const solutioncategoryRouter = express.Router();
const solutioncategoryEndPoints = apiEndPoints.solutioncategory;

solutioncategoryRouter.post(
  solutioncategoryEndPoints.createSolutioncategory,
  solutioncategoryControllers.createSolutioncategory
);
solutioncategoryRouter.get(
  solutioncategoryEndPoints.showsolutioncategorys,
  solutioncategoryControllers.getAllSolutioncategorys
);
solutioncategoryRouter.put(
  solutioncategoryEndPoints.updatesolutioncategory,
  solutioncategoryControllers.updateSolutioncategory
);
solutioncategoryRouter.delete(
  solutioncategoryEndPoints.deleteSolutioncategory,
  solutioncategoryControllers.deleteSolutioncategory
);

module.exports = solutioncategoryRouter;
