-- Criação da tabela cardapios
CREATE TABLE cardapios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurantes_id INT NOT NULL,
    FOREIGN KEY(restaurantes_id) REFERENCES restaurantes(id)
);

-- Inserir dados
INSERT INTO cardapios(restaurantes_id)
VALUES (1);

INSERT INTO cardapios(restaurantes_id)
VALUES (1);

