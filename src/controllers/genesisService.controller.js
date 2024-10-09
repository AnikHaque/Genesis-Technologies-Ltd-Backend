const serviceServices = require("../services/genesis.service");
const sendResponse = require("../utility/sendResponse");

const createService = async (req, res) => {
  const serviceData = req.body;

  try {
    const resp = await serviceServices.createServiceIntoDb(serviceData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Service created successfully",
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

const getAllServices = async (req, res) => {
  try {
    const Services = await serviceServices.getAllServicesFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Services retrieved successfully",
      data: Services,
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

const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const updateData = req.body;

  try {
    const updatedService = await serviceServices.updateServiceInDb(
      serviceId,
      updateData
    );

    if (!updatedService) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Service not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service updated successfully",
      data: updatedService,
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
const deleteService = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const deletedService = await serviceServices.deleteServiceFromDb(serviceId);

    if (!deletedService) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Service not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service deleted successfully",
      data: deletedService,
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
  createService,
  getAllServices,
  updateService,
  deleteService,
};
