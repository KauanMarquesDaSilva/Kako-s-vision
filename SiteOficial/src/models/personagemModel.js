var database = require("../database/config")

function Luau(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Fieal(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Vinicius(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Deivi(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Sajad(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Oliver(idUsuario, fkQuiz) {
    console.log("ACESSEI O PERSONAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, fkQuiz);
    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, Data) VALUES ('${fkQuiz}', '${idUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    Luau,
    Fieal,
    Vinicius,
    Deivi,
    Sajad,
    Oliver
}