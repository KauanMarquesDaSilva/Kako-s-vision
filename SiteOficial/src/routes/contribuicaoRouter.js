var express = require("express");
var router = express.Router();

var contribuicaoController = require("../controllers/contribuicaoController");

router.post("/cores", function (req, res) {
    contribuicaoController.cores(req, res);
});

module.exports = router;