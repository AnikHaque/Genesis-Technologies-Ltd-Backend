const projectServices = require("../services/project.service");
const sendResponse = require("../utility/sendResponse");

const createProject = async (req, res) => {
  const projectData = req.body;

  try {
    const resp = await projectServices.createProjectIntoDb(projectData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Project created successfully",
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

const getAllProjects = async (req, res) => {
  try {
    const Projects = await projectServices.getAllProjectsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Projects retrieved successfully",
      data: Projects,
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

const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const updateData = req.body;

  try {
    const updatedProject = await projectServices.updateProjectInDb(
      projectId,
      updateData
    );

    if (!updatedProject) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Project not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
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
const deleteProject = async (req, res) => {
  const projectId = req.params.id;

  try {
    const deletedProject = await projectServices.deleteProjectFromDb(projectId);

    if (!deletedProject) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Project not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
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
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
