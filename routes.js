const express = require("express");
const articleController = require("./controllers/articleController");
const router = express.Router();

router.get("/api/articulos", articleController.apiArticle);
router.get("/home", articleController.findAllArticle);
router.get("/article/:id", articleController.findOneArticle);

router.post("/admin/crear", articleController.storeArticle);
router.post("/article/:id", articleController.storeEdit);
router.delete("/article/:id", articleController.destroyArticle);

router.get("/admin", articleController.admin);
router.get("/admin/crear", articleController.formUploadArticle);
router.get("/admin/editar/:id", articleController.formUpdateArticle);

module.exports = router;
