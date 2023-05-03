const express = require("express");
const mainController = require("./controllers/mainControllers");
const router = express.Router();

router.get("/", mainController.findAll);
router.get("/notice/:id".mainController.findOne);

module.exports = router;
