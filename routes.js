const express = require("express");
const mainController = require("./controllers/mainControllers");
const router = express.Router();

router.get("/", mainController.findAll);
router.get("/notice", mainController.findOne); //agregar :id despues

module.exports = router;
