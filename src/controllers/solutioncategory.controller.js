const solutioncategoryServices = require("../services/solutioncategory.service");
const sendResponse = require("../utility/sendResponse");

const createSolutioncategory = async (req, res) => {
  const solutioncategoryData = req.body;

  try {
    const resp = await solutioncategoryServices.createSolutioncategoryIntoDb(
      solutioncategoryData
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Solutioncategory created successfully",
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

const getAllSolutioncategorys = async (req, res) => {
  try {
    const Solutioncategorys =
      await solutioncategoryServices.getAllSolutioncategorysFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Solutioncategorys retrieved successfully",
      data: Solutioncategorys,
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

const updateSolutioncategory = async (req, res) => {
  const solutioncategoryId = req.params.id;
  const updateData = req.body;

  try {
    const updatedSolutioncategory =
      await solutioncategoryServices.updateSolutioncategoryInDb(
        solutioncategoryId,
        updateData
      );

    if (!updatedSolutioncategory) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Solutioncategory not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Solutioncategory updated successfully",
      data: updatedSolutioncategory,
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
const deleteSolutioncategory = async (req, res) => {
  const solutioncategoryId = req.params.id;

  try {
    const deletedSolutioncategory =
      await solutioncategoryServices.deleteSolutioncategoryFromDb(
        solutioncategoryId
      );

    if (!deletedSolutioncategory) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Solutioncategory not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Solutioncategory deleted successfully",
      data: deletedSolutioncategory,
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
  createSolutioncategory,
  getAllSolutioncategorys,
  updateSolutioncategory,
  deleteSolutioncategory,
};
