-- Criação do banco restaurante
-- CREATE DATABASE restaurante;
-- USE restaurante;

-- Criação da tabela restaurantes
CREATE TABLE restaurantes (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(20) NOT NULL,
    endereco varchar(80) NOT NULL,
    telefone varchar(16) NOT NULL
);

-- Inserir dados na tabela restaurantes
INSERT INTO restaurantes(nome, endereco, telefone)
VALUES(
    'Bona peti',
    'Rua dos Anjos/N° 25/Monte Castelo/Parnamirim',
    '84 91234-5678'
);