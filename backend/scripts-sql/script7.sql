-- Criação da Tabela pedidos
CREATE TABLE pedido(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    situação enum('pendente','em progresso', 'concluído') NOT NULL DEFAULT 'pendente',
   quantidade INT NOT NULL DEFAULT 1,
    anotação text NOT NULL
);
