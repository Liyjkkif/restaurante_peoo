-- Criação da Tabela pedidos
CREATE TABLE pedido(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    situação enum('pendente','em progresso', 'concluído') NOT NULL DEFAULT 'pendente',
    id_clientes INT NOT NULL,
    FOREIGN KEY(id_clientes) REFERENCES clientes(id_clientes)
);
