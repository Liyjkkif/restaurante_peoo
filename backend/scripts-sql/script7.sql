-- Criação da Tabela pedidos
CREATE TABLE pedido(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comanda ENUM('01', '02', '03', '04', '05', '06', '07', '08', '09', '10') NOT NULL,
    titular text not null default 'Desconhecido',
    pedido text not null,
    quantidade INT NOT NULL DEFAULT 1,
    anotação text NOT NULL,
    situação enum('Pendente','Em progresso', 'Concluído') NOT NULL DEFAULT 'Pendente'
);

insert into pedido (titular, comanda, pedido, quantidade, anotação) VALUES ( 'César', '01','Suco de Abacaxi com Hortelã', 1, 'Sem açúcar');
