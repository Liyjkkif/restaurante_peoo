-- Criar a tabela pratos
CREATE TABLE pratos (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(60) not null,
    ingredientes varchar(200) not null,
    preco decimal(4,2) not null,
    restaurantes_id int not null,
    FOREIGN KEY (restaurantes_id) REFERENCES restaurantes(id)
); -- Tabela pratos relacionada com tabela restaurantes

-- Inserir pratos
INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id) 
VALUES ('Bife de Chorizo com Fritas','Bife de chorizo, batatas fritas, molho chimichurri.', 45.00 ,'1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES('Feijoada Completa', 'Feijão preto, carne de porco, arroz, farofa, couve, laranja.', 38.00, '1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES('Risoto de Camarão', 'Camarões, arroz arbóreo, queijo parmesão, alho-poró, creme de leite.', 52.00, '1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES('Lasanha de Carne Seca com Queijo Coalho ', 'Massa de lasanha, carne seca desfiada, queijo coalho, molho bechamel.', 40.00, '1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES ('Frango ao Curry com Arroz Jasmin','Peito de frango, curry, leite de coco, arroz jasmin, legumes salteados. ',36.00,'1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES ('Pasta Carbonara ','Espaguete, bacon, ovos, queijo parmesão, creme de leite, pimenta do reino.',35.00,'1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES ('Filé de Salmão Grelhado com Purê de Batata','Filé de salmão, batatas, creme de leite, manteiga, ervas finas.',48.00,'1');

INSERT INTO pratos(nome, ingredientes, preco, restaurantes_id)
VALUES ('Costela ao Barbecue com Arroz de Bambu',' Costela suína, molho barbecue, arroz de bambu, legumes grelhados.',55.00,'1');