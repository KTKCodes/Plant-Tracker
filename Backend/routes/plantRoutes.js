const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

console.log("Checking controller:", plantController);

router.get("/", plantController.getHomePage);
router.get("/plants/:id", plantController.getPlantDetail);
router.post("/plants", plantController.createPlant);

module.exports = router;
