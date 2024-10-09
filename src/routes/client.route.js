const express = require("express");
const clientControllers = require("../controllers/client.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const clientRouter = express.Router();
const clientEndPoints = apiEndPoints.client;

clientRouter.post(clientEndPoints.createClient, clientControllers.createClient);
clientRouter.get(clientEndPoints.showClients, clientControllers.getAllClients);
clientRouter.put(clientEndPoints.updateclient, clientControllers.updateClient);
clientRouter.delete(
  clientEndPoints.deleteClient,
  clientControllers.deleteClient
);

module.exports = clientRouter;
