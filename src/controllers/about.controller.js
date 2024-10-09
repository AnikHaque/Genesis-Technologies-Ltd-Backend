const aboutServices = require("../services/about.service");
const sendResponse = require("../utility/sendResponse");

const createAbout = async (req, res) => {
  const aboutData = req.body;

  try {
    const resp = await aboutServices.createAboutIntoDb(aboutData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "About created successfully",
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

const getAllAbouts = async (req, res) => {
  try {
    const Abouts = await aboutServices.getAllAboutsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Abouts retrieved successfully",
      data: Abouts,
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

const updateAbout = async (req, res) => {
  const aboutId = req.params.id;
  const updateData = req.body;

  try {
    const updatedAbout = await aboutServices.updateAboutInDb(
      aboutId,
      updateData
    );

    if (!updatedAbout) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "About not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "About updated successfully",
      data: updatedAbout,
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
const deleteAbout = async (req, res) => {
  const aboutId = req.params.id;

  try {
    const deletedAbout = await aboutServices.deleteAboutFromDb(aboutId);

    if (!deletedAbout) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "About not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "About deleted successfully",
      data: deletedAbout,
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
  createAbout,
  getAllAbouts,
  updateAbout,
  deleteAbout,
};
