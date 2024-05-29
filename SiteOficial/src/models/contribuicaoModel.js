var database = require("../database/config")

function cores(fkUsuario, NomeCor, Hexadecimal, qtdContribuicao) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", fkUsuario, NomeCor, Hexadecimal, qtdContribuicao);
    var instrucaoSql = `
        INSERT INTO Contribuicao (NomeCor, Hexadecimal, Data, QtdContribuicao, fkUsuario) VALUES ('${NomeCor}', '${Hexadecimal}', NOW(), ${qtdContribuicao},'${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cores
}