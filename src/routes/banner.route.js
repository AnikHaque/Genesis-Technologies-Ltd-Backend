const express = require("express");
const bannerControllers = require("../controllers/banner.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const bannerRouter = express.Router();
const bannerEndPoints = apiEndPoints.banner;

bannerRouter.post(bannerEndPoints.createBanner, bannerControllers.createBanner);
bannerRouter.get(bannerEndPoints.showBanners, bannerControllers.getAllBanners);

module.exports = bannerRouter;
