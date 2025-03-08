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
     <div class="areaPedido">
        <div class="areaItens">
            <div class="itensPrato">
                <legend>Pratos</legend>`;
    let opcoes1 = ``;
    for (let x = 0; x < state.pratos.length; x++) {
        let item = `<input type="checkbox" id="prato_${state.pratos[x]._id}" value="${state.pratos[x]._nome}"/>
            <label for="prato_${state.pratos[x]._id}">${state.pratos[x]._nome}</label>
            <br>`;
        opcoes1 = opcoes1 + item;
    }
    dado1 = dado1 + opcoes1 + `</div>`;

    let dado2 = `<div class="itensBebida">
            <legend>Bebidas</legend>`;
    let opcoes2 = ``;
    for (let y = 0; y < state.bebidas.length; y++) {
        let item = `<input type="checkbox" id="bebida_${state.bebidas[y]._id}" value="${state.bebidas[y]._nome}"/>
            <label for="bebida_${state.bebidas[y]._id}">${state.bebidas[y]._nome}</label>
            <br>`;
        opcoes2 = opcoes2 + item;
    }
    dado2 = dado2 + opcoes2 + `</div>`;

    let dado3 = `<div class="areaInput">
            <form id="formPedido">
                <div class="areaRealizar">
                    <input type="text" placeholder="Titular" id="titular" class="nomeCadastro">
                    <br>
                    <input type="number" placeholder="Quantidade" id="quantidade" class="nomeCadastro" max="10" min="1">
                    <br>
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
                    <textarea name="anotacao" id="anotacao" cols="30" rows="10" placeholder="Anotações dos Pedidos"></textarea> 
                    <br>
                    <button class="botaoCadastro" type="submit">Realizar Pedido</button>
                </div>
            </form>
        </div>`;

    let valor = dado1 + dado2 + `</div><br>` + dado3 + `<br></div></div>`;

    let tabela = `<table class="table caption-top">
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
    for (let x = 0; x < state.pedidos.length; x++) {
        linhas += `<tr>
                    <th scope="row">${state.pedidos[x]._id_pedido}</th>
                    <td>${state.pedidos[x]._data_hora}</td>
                    <td>${state.pedidos[x]._titular}</td>
                    <td>${state.pedidos[x]._comanda}</td>
                    <td>${state.pedidos[x]._pedido}</td>
                    <td>${state.pedidos[x]._quantidade}</td>
                    <td>${state.pedidos[x]._anotacao}</td>
                    <td>${state.pedidos[x]._situacao}</td>
                </tr>`;
    }

    tabela = tabela + linhas + `</tbody>
            </table>`;

    let pagina = document.getElementById('titulo').textContent;
    switch (pagina) {
        case "- Cardapio -":
            document.getElementById('caixa-pedidos').innerHTML = valor;

           
            break;

        case "- Pedidos -":
            document.getElementById('caixa-pedidos').innerHTML = tabela;
            break;
    }
};

  const renderFuncionarios = () => {
    let tabela = ` <div class="cadastroFuncionario">
          <h3>Dados</h3>
          <div class="bordaDados">
          <form id="formFuncionario">
          Nome: <input type="text" placeholder="Minimo 10 caracteres" id="nomeFuncionario" class="nomeCadastro">
            <br>
          Função: <select id="funcaoFuncionario" class="funcaoCadastro">
            <option value="">Selecione função</option>
            <option value="Cozinheiro">Cozinheiro</option>
            <option value="Gerente">Gerente</option>
            <option value="Garçom">Garçom</option>
          </select>
          <br>
          Endereço de Email: <input type="email" placeholder="Mimino 10 caracteres" class="nomeCadastro" id="emailFuncionario">
            <br>
          Senha do sistema: <input type="password" placeholder="Minimo 8 caracteres" id="senhaFuncionario" class="senhaCadastro">
          <hr>  

          <p>Somente o gerente tem permissão para realizar cadastro de funcionarios</p>
          Gerente: <input type="text" placeholder="Minimo 10 caracteres" class="nomeCadastro">
            <br>
          Senha: <input type="password" placeholder="Minimo 8 caracteres" class="senhaCadastro">
            <br>
          <button class="botaoCadastro" onclick="cadastroFuncionario()">Cadastrar novo funcionario</button>
          </form>
          </div>
          <br>
          <h3>Lista de Funcionarios</h3>
          <div class="bordaTabela">
          <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">FUNÇÃO</th>
            </tr>
          </thead>
          <tbody>`;

    let linhas = ``;
    for(let x = 0; x<state.funcionarios.length; x++){
      linhas += `<tr>
              <th scope="row">${state.funcionarios[x]._id}</th>
              <td>${state.funcionarios[x]._nome}</td>
              <td>${state.funcionarios[x]._email}</td>
              <td>${state.funcionarios[x]._funcao}</td></tr>`
    }

    tabela = tabela+linhas+`</tbody>
    </table></div></div><br>`


  document.getElementById('caixa-funcionario').innerHTML = tabela;

  document.getElementById('formFuncionario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const newFuncionario = {
        _nome: document.getElementById('nomeFuncionario').value,
        _funcao: document.getElementById('funcaoFuncionario').value,
        _email: document.getElementById('emailFuncionario').value,
        _senha: document.getElementById('senhaFuncionario').value
    };
    await createFuncionario(newFuncionario);
   alert('Funcionario cadastrado com sucesso')
});

  }

export { loadPratos, loadBebidas , loadPedidos, loadFuncionarios, state};
