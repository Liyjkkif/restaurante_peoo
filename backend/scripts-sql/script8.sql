-- Criação da tabela pedido_cardapio
create table pedido_cardapio(
    id int not null,
    FOREIGN key (id_cardapio) REFERENCES cardapio(id_cardapio),
    id_pedido int not null,
    FOREIGN key (id_pedido) REFERENCES pedido(id_pedido),
    quantidade INT NOT NULL DEFAULT 1,
    anotação text NOT NULL
    
);
