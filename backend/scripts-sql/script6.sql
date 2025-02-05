-- Criar a tabela intens_cardapio
CREATE TABLE itens_cardapios(
    id int AUTO_INCREMENT PRIMARY KEY,
    cardapios_id int not null,
    FOREIGN KEY (cardapios_id) REFERENCES cardapios(id),
    pratos_id int,
    FOREIGN KEY (pratos_id) REFERENCES pratos(id),
    bebidas_id int,    
    FOREIGN KEY (bebidas_id) REFERENCES bebidas(id)
);

INSERT INTO itens_cardapios (cardapios_id,pratos_id, bebidas_id) VALUES (1, 1, null);

INSERT INTO itens_cardapios (cardapios_id, pratos_id, bebidas_id) VALUES (1, null, 1);