var contribuicaoModel = require("../models/contribuicaoModel");

function cores(req, res) {
    
    var fkUsuario = req.body.fkUsuario;
    var NomeCor = req.body.NomeCor;
    var Hexadecimal = req.body.Hexadecimal;
    var qtdContribuicao = req.body.qtdContribuicao;

    if (fkUsuario == undefined) {
        res.status(400).send("O idUsuario está indefinido!");
    } else if (NomeCor == undefined) {
        res.status(400).send("O Nome da cor está indefinido!");
    } else if(Hexadecimal == undefined){
        res.status(400).send("O Hexadecimal está indefinido!");
    }else if (qtdContribuicao == undefined) {
        res.status(400).send("A Quantidade de Contribuição está indefinido!");
    }else {
        contribuicaoModel.cores(fkUsuario, NomeCor, Hexadecimal, qtdContribuicao)
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
    cores
}