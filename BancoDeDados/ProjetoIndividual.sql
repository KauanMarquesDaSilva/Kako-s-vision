CREATE DATABASE ProjetoIndividual;

USE ProjetoIndividual;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR (45),
    CorFavorita VARCHAR (45),
    Senha VARCHAR (45));
    
CREATE TABLE Contribuicao (
	idContribuicao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
	NomeCor VARCHAR (45),
    Hexadecimal VARCHAR (45),
    QtdContribuicoes VARCHAR (45),
		CONSTRAINT fkUsuarioContribuicao FOREIGN KEY (fkUsuario)
			REFERENCES Usuario(idUsuario));

SELECT * FROM Usuario JOIN Contribuicao
	ON idUsuario = fkUsuario;