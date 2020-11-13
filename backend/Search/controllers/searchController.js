const { validationResult } = require("express-validator");
const City = require("../../City/models/City");
const Restaurant = require("../../Restaurants/models/Restaurant");

const validateBody = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const getCityId = async (req, res) => {
  const errors = validateBody(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      let city = await City.findOne({
        location: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [
                parseInt(req.body["long"]),
                parseInt(req.body["lat"]),
              ],
            },
            $maxDistance: 5000000,
          },
        },
      });
      if (city) {
        return res.json({
          err: false,
          message: "Success",
          title: city.city_name.split(" ").join("-"),
          city_id: city.city_id,
        });
      } else {
        return res.json({
          err: true,
          message: "Failed to get the city id",
          title: "Kolkata",
          city_id: 2,
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  }
};

const getCollection = async (req, res) => {
  const errors = validateBody(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      let collections = await City.findOne(
        {
          city_id: parseInt(req.body["city_id"]),
        },
        { collections: 1 }
      );
      if (!collections) {
        return res.json({ err: true, message: "Failed", collections: [] });
      }
      return res.json({
        err: false,
        message: "Success",
        collections: collections.collections,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  }
};

const getLocalities = async (req, res) => {
  const errors = validateBody(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      let localities = await Restaurant.find(
        {
          "location.city_id": parseInt(req.body["city_id"]),
        },
        { "location.locality": 1, "location.cords": 1 }
      );
      if (!localities) {
        return res.json({ err: true, message: "Failed", localities: [] });
      }
      return res.json({
        err: false,
        localities: localities,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  }
};

const getRestaurant = async (req, res) => {
  let { q, city_id } = req.query;
  let query = new RegExp(q, "i");
  console.log(query);
  try {
    let result = await Restaurant.find(
      {
        "location.city_id": parseInt(city_id),
        $text: {
          $search: query,
          $diacriticSensitive: false,
          $caseSensitive: false,
        },
      },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
    return res.json({ err: false, message: "Success", result: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

module.exports = { getCityId, getCollection, getLocalities, getRestaurant };
