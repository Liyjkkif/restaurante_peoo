-- Criar tabela funcionarios
CREATE TABLE funcionarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    funcao ENUM('Cozinheiro', 'Gerente', 'Garçom') NOT NULL,
    senha VARCHAR(8) NOT NULL,
    restaurantes_id INT NOT NULL,
    FOREIGN KEY (restaurantes_id) REFERENCES restaurantes(id)
); -- Tabela funcionarios relacionada com tabela restaurantes

-- Inserir valores na tabela funcionarios
INSERT INTO funcionarios (nome, funcao, senha, restaurantes_id)
VALUES ('Júlio César','Gerente','33446699','1');