const express = require("express");
const mainController = require("./controllers/mainControllers");
const router = express.Router();

router.get("/home", mainController.findAll);
router.get("/notice/:id", mainController.findOne); //agregar :id despues
router.get("/admin", mainController.admin);
router.get("/api/articulos", mainController.api);
router.get("/admin/editar/:id", mainController.formUpdate);
router.get("/admin/crear", mainController.formUpload);
router.post("/admin/crear", mainController.create);
router.post("/notice/:id");

module.exports = router;
