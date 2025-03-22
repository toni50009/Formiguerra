
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
    document.getElementById(`p${i}-vida`).textContent = players[i].castelo;
    document.getElementById(`p${i}-muro`).textContent = players[i].muro;
    document.getElementById(`p${i}-tijolos`).textContent = players[i].tijolos;
    document.getElementById(`p${i}-construtores`).textContent = players[i].construtores;
    document.getElementById(`p${i}-soldados`).textContent = players[i].soldados;
    document.getElementById(`p${i}-armas`).textContent = players[i].armas;
    document.getElementById(`p${i}-cristais`).textContent = players[i].cristais;
    document.getElementById(`p${i}-magos`).textContent = players[i].magos;
  }
}

//Função para desabilitar UI do jogador
function desabilitarUI(){
  document.querySelector('.selecionaveis').disabled = true;
}




//Função para verificar de qual jogar vai somar recursos
function verificarJogador(){
  if(currentPlayer === 1){
    const p = players[2];
    p.tijolos += p.construtores;
    p.soldados += p.armas;
    p.cristais += p.magos;
    }else{
      const p = players[1];
      p.tijolos += p.construtores;
      p.soldados += p.armas;
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
