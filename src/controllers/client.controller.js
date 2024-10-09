const clientServices = require("../services/client.service");
const sendResponse = require("../utility/sendResponse");

const createClient = async (req, res) => {
  const clientData = req.body;

  try {
    const resp = await clientServices.createClientIntoDb(clientData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Client created successfully",
      data: resp,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

const getAllClients = async (req, res) => {
  try {
    const Clients = await clientServices.getAllClientsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Clients retrieved successfully",
      data: Clients,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const updateClient = async (req, res) => {
  const clientId = req.params.id;
  const updateData = req.body;

  try {
    const updatedClient = await clientServices.updateClientInDb(
      clientId,
      updateData
    );

    if (!updatedClient) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Client not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Client updated successfully",
      data: updatedClient,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};
// Delete course
const deleteClient = async (req, res) => {
  const clientId = req.params.id;

  try {
    const deletedClient = await clientServices.deleteClientFromDb(clientId);

    if (!deletedClient) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Client not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Client deleted successfully",
      data: deletedClient,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

module.exports = {
  createClient,
  getAllClients,
  updateClient,
  deleteClient,
};
