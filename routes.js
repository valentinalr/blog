const express = require("express");
const noticeControllers = require("./controllers/noticeControllers");
const router = express.Router();

router.get("/home", noticeControllers.findAll);
router.get("/notice/:id", noticeControllers.findOne);
router.get("/admin", noticeControllers.admin);
router.get("/api/articulos", noticeControllers.api);
router.get("/admin/editar/:id", noticeControllers.formUpdate);
router.get("/admin/crear", noticeControllers.formUpload);
router.post("/admin/crear", noticeControllers.create);
router.post("/notice/:id");

module.exports = router;
