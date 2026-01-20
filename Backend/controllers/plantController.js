const Plant = require("../models/plantModel");

//getting plantdetail pages
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

//getting homepage/index
exports.getHomePage = async (req, res) => {
  try {
    const allPlants = await Plant.getAll();

    res.render("index", { plants: allPlants });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.createPlant = async (req, res) => {
  const { name, species, imageUrl, lastWatered, purchaseDate } = req.body;

  try {
    const newPlantId = await Plant.create(
      name,
      species,
      imageUrl,
      lastWatered,
      purchaseDate,
    );

    (res, redirect(`/plants/${newPlantId}`));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding plant");
  }
};
