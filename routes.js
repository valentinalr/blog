const express = require("express");
const articleController = require("./controllers/articleController");
const commentController = require("./controllers/commentController");
const registerController = require("./controllers/registerController");
const loginController = require("./controllers/loginController");

const router = express.Router();

//Retorna los articulos en formato JSON.
router.get("/api/articulos", articleController.apiArticle);

//Muestra todos los articulos, o individualmente de acuerdo a su id.
router.get(
  "/home",
  articleController.findAllArticle,
  loginController.ensureAuthenticated,
  function (req, res) {
    res.send(`Te damos la bienvenida, ${req.user.fullName}!`);
  }
);
router.get("/article/:id", articleController.findOneArticle);

//Vista de la pagina administrador, donde se da la opción de crear, modificar y eliminar un articulo.
router.get("/admin", articleController.admin);

//Rutas y vistas de opciones "editar" articulo.
router.post("/admin/crear", articleController.storeArticle);
router.post("/article/:id", articleController.storeEdit);
router.get("/admin/crear", articleController.formUploadArticle);
router.get("/admin/editar/:id", articleController.formUpdateArticle);

//Guardar y postear comentario
router.post("/article/review/:id", commentController.review);

//Funcionalidad del botón "eliminar". (No requiere una vista)
router.get("/article/delete/:id", articleController.destroyArticle);

//Rutas del Registro
router.get("/register", registerController.viewRegister);
router.post("/register", registerController.createdAuthor);

//Rutas del Login/logout
router.get("/login", loginController.viewLogin);
router.post("/login", loginController.login);
// router.get("/logout", registerController.logoutUser);

module.exports = router;
