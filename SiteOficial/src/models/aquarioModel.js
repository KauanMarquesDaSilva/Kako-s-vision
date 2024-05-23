var database = require("../database/config");

function buscarInformaçõesUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM Usuario WHERE idUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarInformaçõesUsuario,
  cadastrar
}
