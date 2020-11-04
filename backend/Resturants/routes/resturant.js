const express = require("express");
const {
  addResturant,
  addPhoto,
} = require("../controllers/resturantController");
const router = express.Router();

router.post("/add", addResturant);
router.post("/addPhoto", addPhoto);

module.exports = router;
