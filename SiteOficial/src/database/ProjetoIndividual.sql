CREATE DATABASE ProjetoIndividual;

USE ProjetoIndividual;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    NomeUsuario VARCHAR (45),
    Email VARCHAR(265),
    Senha VARCHAR (45),
    CorFavorita VARCHAR(45));
    
CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    NomePersonagem VARCHAR(45));
    
INSERT INTO Quiz (NomePersonagem) VALUE ('Luau'),
	('Fieal'),
    ('Vinicius'),
    ('Deivi'),
    ('Sajad'),
    ('Oliver');
    
CREATE TABLE Resultado (
	idResultado INT AUTO_INCREMENT,
    fkUsuario INT,
    fkQuiz INT,
    Data DATE,
		PRIMARY KEY (idResultado, fkUsuario, fkQuiz),
		CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
			REFERENCES Usuario(idUsuario),
		CONSTRAINT fkResultadoQuiz FOREIGN KEY (fkQuiz)
			REFERENCES Quiz(idQuiz));
    
CREATE TABLE Contribuicao (
	idContribuicao INT PRIMARY KEY AUTO_INCREMENT,
    NomeCor VARCHAR(45),
    Hexadecimal VARCHAR(45),
    Data DATETIME,
    QtdContribucao VARCHAR(45),
    fkUsuario INT,
		CONSTRAINT fkContribuicaoUsuario FOREIGN KEY (fkUsuario)
			REFERENCES Usuario(idUsuario));

SELECT * FROM Usuario;
SELECT * FROM Quiz;
SELECT * FROM Resultado;