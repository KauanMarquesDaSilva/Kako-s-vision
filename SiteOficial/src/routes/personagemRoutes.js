var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.post("/Luau", function (req, res) {
    personagemController.Luau(req, res);
});

router.post("/Fieal", function (req, res) {
    personagemController.Fieal(req, res);
});

router.post("/Vinicius", function (req, res) {
    personagemController.Vinicius(req, res);
});

router.post("/Deivi", function (req, res) {
    personagemController.Deivi(req, res);
});

router.post("/Sajad", function (req, res) {
    personagemController.Sajad(req, res);
});

router.post("/Oliver", function (req, res) {
    personagemController.Oliver(req, res);
});


module.exports = router;