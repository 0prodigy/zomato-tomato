const Restaurant = require("../models/Restaurant");

const addRestaurant = async (req, res) => {
  const data = req.body;
  try {
    let restaurant = new Restaurant(data);
    await restaurant.save();
    return res.json({
      err: false,
      message: "Successfully added",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went Wrong" });
  }
};

const addPhoto = async (req, res) => {
  const restaurant = await Restaurant.findOne({ id: req.body["res_id"] });
  if (restaurant) {
    try {
      let photos = req.body.photos;
      restaurant.photos = [...restaurant.photos, ...photos];
      await restaurant.save();
      return res.json({ err: false, message: "Photos added successfully" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No restaurant found with this id" });
  }
};

const addMenu = async (req, res) => {
  const restaurant = await Restaurant.findOne({ id: req.body["res_id"] });
  if (restaurant) {
    try {
      let { menu } = req.body;
      restaurant.menu = [...restaurant.menu, ...menu];
      await restaurant.save();
      return res.json({ err: false, message: "Menu  added successfully" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No restaurant found with this id" });
  }
};

const getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findOne({ id: req.params["id"] });
  if (restaurant) {
    return res.json({ err: false, message: "Success", restaurant: restaurant });
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No restaurant found with this id" });
  }
};

const getAllRestaurant = async (req, res) => {
  try {
    const resturants = await Restaurant.find({
      "location.city_id": parseInt(req.query["city_id"]),
    });
    if (resturants) {
      return res.json({ err: false, message: "Success", resturants });
    } else {
      return res
        .status(404)
        .json({ err: true, message: "Fail No resturant found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

const fillterdRestaurant = async (req, res) => {
  let { filters, sort } = req.body;
  for (let key in filters[0]) {
    if (key == "cuisines") {
      let reg = new RegExp(filters[0][key], "i");
      filters = [{ ...filters[0], cuisines: reg }];
    }
  }
  try {
    const restaurant = await Restaurant.find(...filters).sort(...sort);
    return res.json({ err: false, message: "Success", restaurant: restaurant });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

module.exports = {
  addRestaurant,
  addPhoto,
  addMenu,
  getRestaurant,
  getAllRestaurant,
  fillterdRestaurant,
};
