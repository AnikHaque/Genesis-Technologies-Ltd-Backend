const mongoose = require("mongoose");
const bannerModel = require("../models/banner.model");
const ObjectId = mongoose.Types.ObjectId;
const createBannerIntoDb = async (payload) => {
  const resp = await bannerModel.create(payload);
  return resp;
};

const getAllBannersFromDb = async () => {
  let data = await bannerModel.find();
  return data;
};

const updateBannerInDb = async (bannerId, payload) => {
  if (!ObjectId.isValid(bannerId)) {
    throw new Error("Invalid banner ID");
  }

  const updatedBanner = await bannerModel.findByIdAndUpdate(bannerId, payload, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update operation
  });

  return updatedBanner;
};

const deleteBannerFromDb = async (id) => {
  const deletedBanner = await bannerModel.findByIdAndDelete(id);
  return deletedBanner;
};

const bannerServices = {
  createBannerIntoDb,
  getAllBannersFromDb,
  updateBannerInDb,
  deleteBannerFromDb,
};

module.exports = bannerServices;
