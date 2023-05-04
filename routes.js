const express = require("express");
const mainController = require("./controllers/mainControllers");
const router = express.Router();

router.get("/home", mainController.findAll);
router.get("/notice/:id", mainController.findOne); //agregar :id despues
router.get("/admin", mainController.admin);
router.get("/api/articulos", mainController.api);

module.exports = router;
