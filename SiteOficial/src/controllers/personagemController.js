var personagemModel = require("../models/personagemModel");

function Luau(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Luau(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Fieal(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Fieal(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Vinicius(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Vinicius(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Deivi(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Deivi(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Sajad(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Sajad(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Oliver(req, res) {
    
    var fkQuiz = req.body.fkQuiz;
    var idUsuario = req.body.idUsuario;

    if (fkQuiz == undefined) {
        res.status(400).send("O nome do personagem está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do Usuário está indefinido!");
    } else {
        personagemModel.Oliver(idUsuario, fkQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    Luau,
    Fieal,
    Vinicius,
    Deivi,
    Sajad,
    Oliver
}