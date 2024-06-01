var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var Email = req.body.emailServer;
    var Senha = req.body.senhaServer;
    var NomeUsuario = req.body.nomeServer;

    if (Email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (Senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }else if (NomeUsuario == undefined) {
            res.status(400).send("Seu nome está indefinida!");
    } else {

        usuarioModel.autenticar(NomeUsuario, Email, Senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            NomeUsuario: resultadoAutenticar[0].NomeUsuario,
                            Email: resultadoAutenticar[0].Email,
                            Senha: resultadoAutenticar[0].Senha,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var NomeUsuario = req.body.nomeServer;
    var Email = req.body.emailServer;
    var Senha = req.body.senhaServer;
    var CorFavorita = req.body.corServer;

    // Faça as validações dos valores
    if (NomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (Email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (Senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (CorFavorita == undefined) {
        res.status(400).send("Sua cor está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(NomeUsuario, Email, Senha, CorFavorita)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDados(req, res){

    usuarioModel.obterDados()
        .then(function(resultado){
            
            if(resultado.length > 0){
                res.json(resultado);
            }else{
                req.status(404).send("Nenhum resultado salvo");
            }
        })

        .catch(function(erro){
            console.error("Erro ao obter o resultado", erro);
            res.status(500).json({error: "Erro interno do servidor"});
        });

}

module.exports = {
    autenticar,
    cadastrar,
    obterDados
}