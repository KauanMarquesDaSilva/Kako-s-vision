CREATE DATABASE ProjetoIndividual;

USE ProjetoIndividual;

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    NomePersonagem VARCHAR(45),
    Horario DATETIME);
    

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR (45),
    Email VARCHAR(265),
    Senha VARCHAR (45),
    CorFavorita VARCHAR(45),
    fkQuiz INT,
		CONSTRAINT fkQuizUsuario FOREIGN KEY (fkQuiz)
			REFERENCES Quiz (idQuiz));
    
CREATE TABLE Contribuicao (
	idContribuicao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
	NomeCor VARCHAR (45),
    Hexadecimal VARCHAR (45),
    QtdContribuicoes VARCHAR (45),
		CONSTRAINT fkUsuarioContribuicao FOREIGN KEY (fkUsuario)
			REFERENCES Usuario(idUsuario));

SELECT * FROM Usuario;