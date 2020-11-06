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
            $maxDistance: 5000,
          },
        },
      });
      if (city) {
        return res.json({
          err: false,
          message: "Success",
          city_id: city.city_id,
        });
      } else {
        return res.json({
          err: false,
          message: "Success",
          city_id: 4,
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  }

  //   let city = await City.find({ city_id: "2" });
  //   console.log(city);
};

module.exports = { getCityId };
