const Resturant = require("../models/Resturant");

const addResturant = async (req, res) => {
  const data = req.body;
  try {
    let resturant = new Resturant(data);
    await resturant.save();
    return res.json({
      err: false,
      message: "Successfully added",
      data: resturant,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went Wrong" });
  }
};

const addPhoto = async (req, res) => {
  const resturant = await Resturant.findOne({ id: req.body["res_id"] });
  if (resturant) {
    try {
      let photos = req.body.photos.split(",");
      resturant.photos = [...resturant.photos, ...photos];
      await resturant.save();
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
      .json({ err: true, message: "No resturant found with this id" });
  }
};

module.exports = { addResturant, addPhoto };
