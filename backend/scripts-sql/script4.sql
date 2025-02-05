-- Criar a tabela bebidas
CREATE TABLE bebidas(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(60) not null,
    ingredientes varchar(200) not null,
    preco decimal(4,2) not null,
    restaurantes_id int not null,
    FOREIGN KEY (restaurantes_id) REFERENCES restaurantes(id)
); -- Tabela bebidas relacionada com tabela restaurantes

-- Inserir bebidas
INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Suco Natural de Laranja','Laranja fresca, açúcar (opcional), gelo.', 10.00 ,'1');

INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Limonada Suíça','Limão, água, açúcar, gelo.', 12.00 ,'1');

INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Suco de Abacaxi com Hortelã','Abacaxi, hortelã, açúcar (opcional), gelo.', 14.00 ,'1');

INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Chá Gelado de Pêssego','Chá preto, pêssego, açúcar, gelo.', 12.00 ,'1');

INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Suco de Morango','Morango, açúcar (opcional), gelo.', 14.00 ,'1');

INSERT INTO bebidas(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Água Mineral','Água mineral.', 6.00 ,'1');

