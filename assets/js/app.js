// ARRAY DE CARTAS
const cartas = [
  {
    nome: 'alistamento',
    efeito:{
      tipo: 'adiciona',
      alvo: 'soldados',
      quantidade: 1
    },
    custo: {
      recurso: 'armas',
      quantidade: 8
  },
  imagem: '/assets/img/alistamento/alistamento.png',
},
  {
    nome: 'arqueiro',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 3
    },
    custo:{
      recurso: 'armas',
      quantidade: 1
    },
    imagem: '/assets/img/arqueiro/arqueiro.png'
  },
  {
    nome: 'ataquedireto',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 3
    },
    custo: {
      recurso: 'armas',
      quantidade: 2
  },
  imagem: '/assets/img/ataquedireto/ataquedireto.png',
  },
  {
    nome: 'ataquetriplo',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 6
    },
    custo: {
      recurso: 'armas',
      quantidade: 4
  },
  imagem: '/assets/img/ataquetriplo/ataquetriplo.png',
  },
  {
    nome: 'babilonia',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 32
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 39
  },
  imagem: '/assets/img/babilonia/babilonia.png',  },
  {
    nome: 'catapulta',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 12
    },
    custo: {
      recurso: 'armas',
      quantidade: 10
  },
  imagem: '/assets/img/catapulta/catapulta.png',
  },
  {
    nome: 'conjurararmas',
    efeito:{
      tipo: 'adiciona',
      alvo: 'armas',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurararmas/conjurararmas.png',
  },
  {
    nome: 'conjurarcristais',
    efeito:{
      tipo: 'adiciona',
      alvo: 'cristais',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurarcristais/conjurarcristais.png',
  },
  {
    nome: 'conjurartijolos',
    efeito:{
      tipo: 'adiciona',
      alvo: 'tijolos',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurartijolos/conjurartijolos.png',
  },
  {
    nome: 'contrabando',
    efeito:{
      tipo: {
        tipo1: 'adiciona',
        tipo2: 'remove'
      },
      alvo: {
        alvo1: 'tijolos',
        alvo2: 'cristais',
        alvo3: 'armas'
      },
      quantidade: 5
    },
    custo: {
      recurso: 'armas',
      quantidade: 15
  },
  imagem: '/assets/img/contrabando/contrabando.png',
  },
  {
    nome: 'demolirarmas',
    efeito:{
      tipo: 'remove',
      alvo: 'armas',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolirarmas/demolirarmas.png',
  },
  {
    nome: 'demolircristais',
    efeito:{
      tipo: 'remove',
      alvo: 'cristais',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolircristais/demolircristais.png',
  },
  {
    nome: 'demolirtijolos',
    efeito:{
      tipo: 'remove',
      alvo: 'tijolos',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolirtijolos/demolirtijolos.png',
  },
  {
    nome: 'fortaleza',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 20
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 18
  },
  imagem: '/assets/img/fortaleza/fortaleza.png',
  },
  {
    nome: 'hannya',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 32
    },
    custo: {
      recurso: 'armas',
      quantidade: 28
  },
  imagem: '/assets/img/hannya/hannya.png',
  },
  {
    nome: 'incendiar',
    efeito:{
      tipo: 'remove',
      alvo: {
        alvo1: 'tijolos',
        alvo2: 'armas',
        alvo3: 'cristais'
      },
      quantidade: 4
    },
    custo: {
      recurso: 'armas',
      quantidade: 12
  },
  imagem: '/assets/img/incendiar/incendiar.png',
  },
  {
    nome: 'injustica',
    efeito:{
      tipo: {
        tipo1: 'adiciona',
        tipo2: 'remove'
      },
      alvo: 'castelo',
      quantidade: {
        quantidadeadiciona: 8,
        quantidaderemove: 4
      }
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 10
  },
  imagem: '/assets/img/injustica/injustica.png',
  },
  {
    nome: 'maldicao',
    efeito:{
      tipo: {
        tipo1: 'adiciona',
        tipo2: 'remove'
      },
      alvo: {
        alvo1: 'tijolos',
        alvo2: 'armas',
        alvo3: 'cristais',
        alvo4: 'construtores',
        alvo5: 'soldados',
        alvo6: 'magos'
      },
      quantidade: 1
    },
    custo: {
      recurso: 'cristais',
      quantidade: 25
  },
  imagem: '/assets/img/maldicao/maldicao.png',
  },
  {
    nome: 'merlin',
    efeito:{
      tipo: 'adiciona',
      alvo: 'magos',
      quantidade: 1
    },
    custo: {
      recurso: 'cristais',
      quantidade: 8
  },
  imagem: '/assets/img/merlin/merlin.png',
  },
  {
    nome: 'montagrilos',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 4
    },
    custo: {
      recurso: 'armas',
      quantidade: 2
  },
  imagem: '/assets/img/montagrilos/montagrilos.png',
  },
  {
    nome: 'muralha',
    efeito:{
      tipo: 'adiciona',
      alvo: 'muro',
      quantidade: 22
    },
    custo: {
      recurso: 'tijolos ',
      quantidade: 12
  },
  imagem: '/assets/img/muralha/muralha.png',
  },
  {
    nome: 'murodebarro',
    efeito:{
      tipo: 'adiciona',
      alvo: 'muro',
      quantidade: 3
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 1
  },
  imagem: '/assets/img/murodebarro/murodebarro.png',
  },
  {
    nome: 'musgorigido',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 8
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 6
  },
  imagem: '/assets/img/musgorigido/musgorigido.png',
  },
  {
    nome: 'pixies',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 22
    },
    custo: {
      recurso: 'cristais',
      quantidade: 22
  },
  imagem: '/assets/img/pixies/pixies.png',
  },
  {
    nome: 'musgorigido',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 8
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 6
  },
  imagem: '/assets/img/musgorigido/musgorigido.png',
  },
  {
    nome: 'ponteprotegida',
    efeito:{
      tipo: 'adiciona',
      alvo: 'muro',
      quantidade: 6
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 10
  },
  imagem: '/assets/img/ponteprotegida/ponteprotegida.png',
  },
  {
    nome: 'primeiropiso',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 5
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 1
  },
  imagem: '/assets/img/primeiropiso/primeiropiso.png',
  },
  {
    nome: 'surpreender',
    efeito:{
      tipo: 'remover',
      alvo: 'castelo',
      quantidade: 10
    },
    custo: {
      recurso: 'armas',
      quantidade: 18
  },
  imagem: '/assets/img/surpreender/surpreender.png',
  },
  {
    nome: 'tamandua',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 25
    },
    custo: {
      recurso: 'cristais',
      quantidade: 21
  },
  imagem: '/assets/img/tamandua/tamandua.png',
  },
  {
    nome: 'torredevigia',
    efeito:{
      tipo: 'adiciona',
      alvo: 'castelo',
      quantidade: 5
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 5
  },
  imagem: '/assets/img/torredevigia/torredevigia.png',
  },
  {
    nome: 'universidade',
    efeito:{
      tipo: 'adiciona',
      alvo: 'construtores',
      quantidade: 1
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 8
  },
  imagem: '/assets/img/universidade/universidade.png',
  }
];




// Arrays dos players:
const players = {
  1: {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  },
  2: {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  }
};

//globais
let currentPlayer = 1;


//Função para escolher aleatoriamente uma carta para o jogador
function escolherCarta(){


  const maosJogadores = document.querySelectorAll('.campo__jogo__jogador__carta');
  maosJogadores.forEach((el) => {
    let indice = Math.floor(Math.random() * cartas.length);
    const cartaSelecionada = cartas[indice];
    el.innerHTML += `
    <img src="${cartaSelecionada.imagem}"  class="carta" alt="${cartaSelecionada.nome}" onclick="aplicarEfeito('${cartaSelecionada.nome}')">
    `;
  });
}

escolherCarta();



// Função para atualizar a interface do usuário
function attUI(){
  for(let i = 1; i <= 2; i++){
    document.getElementById(`p${i}-castelo`).textContent = players[i].castelo;
    document.getElementById(`p${i}-muro`).textContent = players[i].muro;
    document.getElementById(`p${i}-tijolos`).textContent = players[i].tijolos;
    document.getElementById(`p${i}-construtores`).textContent = players[i].construtores;
    document.getElementById(`p${i}-soldados`).textContent = players[i].soldados;
    document.getElementById(`p${i}-armas`).textContent = players[i].armas;
    document.getElementById(`p${i}-cristais`).textContent = players[i].cristais;
    document.getElementById(`p${i}-magos`).textContent = players[i].magos;
  }
}

//Função para desabilitar Selecao de cartas do jogador
function desabilitarSelecao(){
  const cartasJogador1 = document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis');
  cartasJogador1.forEach(carta => {
    carta.classList.add('desabilitada');
  });
}


//Função para habilitar novamente a seleção
function habilitarSelecao(){
  const cartasJogador1 = document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis');
  cartasJogador1.forEach(carta => {
    carta.classList.remove('desabilitada');
  });
}




//Função para verificar de qual jogar vai somar recursos
function verificarJogador(){
  if(currentPlayer === 1){
    const p = players[2];
    p.tijolos += p.construtores;
    p.armas += p.soldados;
    p.cristais += p.magos;
    }else{
      const p = players[1];
      p.tijolos += p.construtores;
      p.armas += p.soldados;
      p.cristais += p.magos;
    }
}

//Função para mostrar a próxima rodada
function proximaRodada(){
  verificarJogador();

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  attUI();
}

//Função para o BOT jogar
function botJoga(){
  document.querySelector('.campo__jogo__jogador__carta.selecionaveis').disabed = true;

  currentPlayer = currentPlayer === 2 ? 1 : 2;
  attUI();
}

//Função para escolher qual FUNÇÃO DE CARTA será executada no click
function escolherFuncaoCarta(carta){
  const funcao = carta.dataset.funcao;
  window[funcao]();
}




// A PARTIR DAQUI COMEÇAM AS FUNÇÕES DE CADA CARTA
function aplicarEfeito(nomeCarta){

  const carta = cartas.find(c => c.nome === nomeCarta);

  if(!carta || !carta.efeito){
    console.error('Carta não encontrada ou sem efeito', nomeCarta);
    return;
  }

  const jogador = players[currentPlayer];
  const efeito = carta.efeito;
  const custo = carta.custo;
  const recurso = carta.custo.recurso;
  const qtdRecurso = carta.custo.quantidade;

  let recursoJogador = jogador[recurso];

  if(recursoJogador < qtdRecurso){
    alert('Sem quantidade suficiente');
    return;
  }
  

  if(efeito.tipo === 'adiciona'){
    
    jogador[efeito.alvo] += efeito.quantidade;
    attUI();

  }else if(efeito.tipo === 'dano'){

    jogadorAlvo = currentPlayer === 1 ? 2 : 1;

    players[jogadorAlvo].castelo -= efeito.quantidade;
    attUI();

  }







  jogador[recurso] -= qtdRecurso;
}
