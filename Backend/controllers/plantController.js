const Plant = require("../models/plantModel");

exports.getPlantDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.getOne(id);

    if (!plant) {
      return res.status(404).send("Plant not found");
    }

    res.render("plantdetail", { plant: plant });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
