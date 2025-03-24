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

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

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
    jogador[recurso] -= qtdRecurso;
    attUI();

  }








}
