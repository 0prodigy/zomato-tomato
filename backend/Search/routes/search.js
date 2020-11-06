const express = require("express");
const { getCityId } = require("../controllers/searchController");
const router = express.Router();

router.get("/cityId", getCityId);

module.exports = router;
