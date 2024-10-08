const bannerModel = require("../models/banner.model");

const createBannerIntoDb = async (payload) => {
  const resp = await bannerModel.create(payload);
  return resp;
};

const getAllBannersFromDb = async () => {
  let data = await bannerModel.find();
  return data;
};

const bannerServices = {
  createBannerIntoDb,
  getAllBannersFromDb,
};

module.exports = bannerServices;
