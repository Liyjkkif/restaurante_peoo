/*Contém funções reutilizáveis para interagir com a API. 
Ele gerencia as requisições HTTP que são feitas ao backend para carregar, criar, atualizar ou excluir tarefas.*/

// Função genérica para realizar uma requisição GET
const get = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };
  
  // Função genérica para realizar uma requisição POST
  const post = async (url, data) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };
  
  export { get, post };

