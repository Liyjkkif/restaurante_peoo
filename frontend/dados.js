/*Este arquivo contém toda a lógica relacionada ao gerenciamento dos itens do cardapio. 
Ele faz o carregamento das tarefas da API, renderiza pratos e bebidas na interface e 
permite a criação de novos pratos e bebidas.*/

import state from './state.js';
import {get, post} from './api.js';

//Função para carregar os pratos e renderizá-los
const loadPratos = async () => {
    const Pratos = await get('http://localhost:5000/api/pratos');
    state.pratos = Pratos;
    renderPratos();
};

//Função para carregar as bebidas e renderizá-las
const loadBebidas = async () => {
    const Bebidas = await get('http://localhost:5000/api/bebidas');
    state.bebidas = Bebidas;
    renderBebidas();
};


// Função para criar um novo prato
const createPrato = async (prato) => {
    await post('http://localhost:5000/api/pratos', prato);
    await loadPratos(); // Recarregar a lista de pratos
};

// Função para criar uma nova bebida
const createBebida = async (bebida) => {
    await post('http://localhost:5000/api/bebidas', bebida);
    await loadPratos(); // Recarregar a lista de bebidas
};


// Função para renderizar a lista de pratos
const renderPratos = () => {
    if (!state.pratos) return; // Verifica se state.pratos está definido
  
    const pratoItems = state.pratos.map(prato => `
      <li class="list-group-item">
        <strong>${prato.nome}</strong> - ${prato.ingredientes}
        <span class="badge bg-secondary">${prato.preco}</span>
      </li>
    `).join('');
  
    const content = `
      <h2>Pratos</h2>  
      <form id="pratoForm">
        <div class="mb-3">
          <label for="pratoNome" class="form-label">Título</label>
          <input type="text" id="pratoNome" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="pratoIngredientes" class="form-label">Descrição</label>
          <textarea id="pratoIngredientes" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="pratoPreco" class="form-label">Preço Prato</label>
          <input type="number" id="pratoPreco" class="form-control" required>
        </div>
        <button type="submit" class="botão">Criar Prato</button>
      </form>
      <hr>
      <ul class="list-group">${pratoItems}</ul>
    `;
    document.getElementById('app-content').innerHTML = content;
  
    document.getElementById('pratoForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const newPrato = {
        nome: document.getElementById('pratoNome').value,
        ingredientes: document.getElementById('pratoIngredientes').value,
        preco: document.getElementById('pratoPreco').value
      };
      await createPrato(newPrato);
    });
  };

// Função para renderizar a lista de bebidas
const renderBebidas = () => {
    if (!state.bebidas) return; // Verifica se state.bebidas está definido

    const bebidaItems = state.bebidas.map(bebida => `
      <li class="list-group-item">
        <strong>${bebida.nome}</strong> - ${bebida.ingredientes}
        <span class="badge bg-secondary">${bebida.preco}</span>
      </li>
    `).join('');
  
    const content = `
      <h2>Bebidas</h2>  
      <form id="bebidaForm">
        <div class="mb-3">
          <label for="bebidaNome" class="form-label">Título</label>
          <input type="text" id="bebidaNome" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="bebidaIngredientes" class="form-label">Descrição</label>
          <textarea id="bebidaIngredientes" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="bebidaPreco" class="form-label">Preço da Bebida</label>
          <input type="number" id="bebidaPreco" class="form-control" required>
        </div>
        <button type="submit" class="botão">Criar Bebida</button>
      </form>
      <hr>
      <ul class="list-group">${bebidaItems}</ul>
    `;
    document.getElementById('app-content').innerHTML = content;
  
    document.getElementById('bebidaForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const newBebida = {
        nome: document.getElementById('bebidaNome').value,
        ingredientes: document.getElementById('bebidaIngredientes').value,
        preco: document.getElementById('bebidaPreco').value
      };
      await createBebida(newBebida);
    });
  };

export { loadPratos, loadBebidas };
