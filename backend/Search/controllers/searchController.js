const City = require("../../City/models/City");

const calcDistance = (lat1, lon1, lat2, lon2) => {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
};

const getCityId = async (req, res) => {
  let city = await City.find(
    {
      $or: {
        [["latitude", "longitude"]]: [22.572646, 88.363895],
      },
    },
    "city_id"
  );
  //   let city = await City.find({ city_id: "2" });
  console.log(city);
};

module.exports = { getCityId };
