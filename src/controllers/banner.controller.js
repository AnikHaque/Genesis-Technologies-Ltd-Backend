const bannerServices = require("../services/banner.service");
const sendResponse = require("../utility/sendResponse");

const createBanner = async (req, res) => {
  const bannerData = req.body;

  try {
    const resp = await bannerServices.createBannerIntoDb(bannerData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Banner created successfully",
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

const getAllBanners = async (req, res) => {
  try {
    const Banners = await bannerServices.getAllBannersFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Banners retrieved successfully",
      data: Banners,
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

const updateBanner = async (req, res) => {
  const bannerId = req.params.id;
  const updateData = req.body;

  try {
    const updatedBanner = await bannerServices.updateBannerInDb(
      bannerId,
      updateData
    );

    if (!updatedBanner) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Banner not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Banner updated successfully",
      data: updatedBanner,
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
const deleteBanner = async (req, res) => {
  const bannerId = req.params.id;

  try {
    const deletedBanner = await bannerServices.deleteBannerFromDb(bannerId);

    if (!deletedBanner) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Banner not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Banner deleted successfully",
      data: deletedBanner,
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
  createBanner,
  getAllBanners,
  updateBanner,
  deleteBanner,
};
