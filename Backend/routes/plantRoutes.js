const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

console.log("Checking controller:", plantController);

router.get("/:id", plantController.getPlantDetail);

module.exports = router;
