/*Este arquivo contém toda a lógica relacionada ao gerenciamento dos itens do cardapio. 
Ele faz o carregamento das tarefas da API, renderiza pratos e bebidas na interface e 
permite a criação de novos pratos e bebidas.*/

import state from './state.js';
import {get, post} from './api.js';

//Função para carregar os pratos e renderizá-los
const loadPratos = async () => {
    const pratos = await get('http://localhost:5000/pratos');
    state.pratos = pratos;
    console.log(pratos);
    renderPratos();
};

//Função para carregar as bebidas e renderizá-las
const loadBebidas = async () => {
    const bebidas = await get('http://localhost:5000/bebidas');
    state.bebidas = bebidas;
    renderBebidas();
};

//Função para carregar os pedidos e renderizá-los
const loadPedidos = async () => {
  const pedidos = await get('http://localhost:5000/pedidos');
  state.pedidos = pedidos;
  renderPedidos();
}

//Função para carregar os funcionarios e renderiza-los
const loadFuncionarios = async () => {
  const funcionarios = await get('http://localhost:5000/funcionarios');
  state.funcionarios = funcionarios;
  renderFuncionarios();
}

//Por enquanto não será utilizado as funções de criação. mas pode ser necessario futuramente
// Função para criar um novo prato
const createPrato = async (prato) => {
    await post('http://localhost:5000/pratos', prato);
    await loadPratos(); // Recarregar a lista de pratos
};

// Função para criar uma nova bebida
const createBebida = async (bebida) => {
    await post('http://localhost:5000/bebidas', bebida);
    await loadPratos(); // Recarregar a lista de bebidas
};

// Função para criar um pedido
const createPedido = async (pedido) => {
    await post('http://localhost:5000/pedidos', pedido);
    await loadPedidos(); // Recarregar a lista de pedidos
}

// Função para criar um novo funcionario
const createFuncionario = async (funcionario) => {
    await post('http://localhost:5000/funcionarios', funcionario);
    await loadPedidos(); // Recarregar a lista de pedidos
}


// Função para renderizar a lista de pratos
const renderPratos = () => {
  let tabela = `<table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">INGREDIENTES</th>
              <th scope="col">PREÇO</th>
            </tr>
          </thead>
          <tbody>`
    
    let linhas = ``
    
    for(let x = 0; x<state.pratos.length; x++){
      let novaLinha = `<tr>
              <th scope="row">${state.pratos[x]._id}</th>
              <td>${state.pratos[x]._nome}</td>
              <td>${state.pratos[x]._ingredientes}</td>
              <td>R$ ${state.pratos[x]._preco}.00</td>
            </tr>`
      linhas = linhas+novaLinha
    }

    tabela = tabela+linhas+`</tbody>
        </table>`

  document.getElementById("caixa-pratos").innerHTML = tabela;
  };


// Função para renderizar a lista de bebidas
const renderBebidas = () => {
  let tabela = `<table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">INGREDIENTES</th>
              <th scope="col">PREÇO</th>
            </tr>
          </thead>
          <tbody>`
    
    let linhas = ``
    
    for(let x = 0; x<state.bebidas.length; x++){
      let novaLinha = `<tr>
              <th scope="row">${state.bebidas[x]._id}</th>
              <td>${state.bebidas[x]._nome}</td>
              <td>${state.bebidas[x]._ingredientes}</td>
              <td>R$ ${state.bebidas[x]._preco}.00</td>
            </tr>`
      linhas = linhas+novaLinha
    }

    tabela = tabela+linhas+`</tbody>
        </table>`

  document.getElementById("caixa-bebidas").innerHTML = tabela;
  };


  const renderPedidos = () => {
    let dado1 = `
      <div class="areaItens">
      <div class="itensPrato">
      <legend>Pratos</legend>`
        let opcoes1 = ``
        for(let x = 0; x<state.pratos.length; x++){
          let item = `<input type="checkbox" id="prato_${state.pratos[x]._id}" value="${state.pratos[x]._nome}"/>
          <label for="prato_${state.pratos[x]._id}">${state.pratos[x]._nome}</label>
          <br>`;
            opcoes1 = opcoes1+item;
        }
        dado1 = dado1+opcoes1+`</div>`
    
    let dado2 = `<div class="itensBebida">
      <legend>Bebidas</legend>`
      let opcoes2 = ``
      for(let y = 0; y<state.bebidas.length; y++){
        let item = `<input type="checkbox" id="bebida_${state.bebidas[y]._id}" value="${state.bebidas[y]._nome}"/>
        <label for="bebida_${state.bebidas[y]._id}">${state.bebidas[y]._nome}</label>
        <br>`;
          opcoes2 = opcoes2+item;
        }
        dado2 = dado2+opcoes2+`</div>`
    
      let dado3 = `<div class="areaInput">
        <div class="areaRealizar">
          <input type="text" placeholder="Titular" id="titular" class="nomeCadastro">
          <select id="comanda" class="funcaoCadastro">
            <option value="">Comanda</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
          </select>
              <br>
            <button class="botaoCadastro" onclick="alertar()">Realizar Pedido</button>
          </div>
          <textarea name="anotacao" id="anotacao" cols="30" rows="10" placeholder="Anotações dos Pedidos"></textarea> 
            </div>`
    
        let valor = dado1+dado2+`</div><br>`+dado3+`<br></div>`
       
      
        let tabela = `<table>
        <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DATA E HORA</th>
              <th scope="col">TITULAR</th>
              <th scope="col">COMANDA</th>
              <th scope="col">PEDIDO</th>
              <th scope="col">QUANTIDADE</th>
              <th scope="col">ANOTAÇÃO</th>
              <th scope="col">SITUAÇÃO</th>
            </tr>
          </thead>
          <tbody>`;

        let linhas = ``;
        for(let x = 0; x<state.pedidos.length; x++){
          linhas += `<tr>
              <th scope="row">${state.pedidos[x]._id_pedido}</th>
              <td>${state.pedidos[x]._data_hora}</td>
              <td>${state.pedidos[x]._comanda}</td>
              <td>${state.pedidos[x]._titular}</td>
              <td>${state.pedidos[x]._pedido}</td>
              <td>${state.pedidos[x]._quantidade}</td>
              <td>${state.pedidos[x]._anotacao}</td>
              <td>${state.pedidos[x]._situacao}</td>
            </tr>`;
        }

        tabela = tabela+linhas+`</tbody>
          </table>`

      
    let pagina = document.getElementById('titulo').textContent;
    switch(pagina){
      case "- Cardapio -":
        document.getElementById('caixa-pedido').innerHTML = valor;
        break;
      case "- Pedidos -":
        document.getElementById('caixa-pedido').innerHTML = tabela;
        break;
    }
    

    /*let itensEscolhidos = ``
    for(let p = 0; p<state.pratos.length; p++){
      let PRATO = document.getElementById(`prato_${state.pratos[p]._id}`).value;
      if(PRATO.checked){
        itensEscolhidos += state.pratos[p]._nome;
      }
    }*/
  }

  const renderFuncionarios = () => {
    let tabela = `<table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">FUNÇÃO</th>
            </tr>
          </thead>
          <tbody>`;

    let linhas = ``;
    for(let x = 0; x<state.funcionarios.length; x++){
      linhas += `<tr>
              <th scope="row">${state.funcionarios[x]._id}</th>
              <td>${state.funcionarios[x]._nome}</td>
              <td>${state.funcionarios[x]._funcao}</td></tr>`
    }

    tabela = tabela+linhas+`</tbody>
    </table>`


  document.getElementById('caixa-funcionario').innerHTML = tabela;

  }

export { loadPratos, loadBebidas , loadPedidos, loadFuncionarios};
