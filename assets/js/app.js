// ARRAY DE CARTAS
const cartas = [
  {
    nome: 'alistamento',
    efeito:{
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'gangorra',
      alvo: ['tijolos',
        'armas',
        'cristais'
      ],
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
      tipo: 'remover',
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
      tipo: 'remover',
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
      tipo: 'remover',
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
      tipo: 'adicionar',
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
      tipo: 'remover',
      alvo: ['tijolos',
        'armas',
        'cristais'
      ],
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
      tipo: 'gangorra',
      alvo: 'castelo',
      quantidade: [8,4]
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
      tipo: 'gangorratudo',
      alvo: [
         'tijolos',
         'armas',
         'cristais',
         'construtores',
         'soldados',
         'magos'
      ],
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
      alvo: 'muro',
      quantidade: 22
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 12
  },
  imagem: '/assets/img/muralha/muralha.png',
  },
  {
    nome: 'murodebarro',
    efeito:{
      tipo: 'adicionar',
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
    nome: 'pixies',
    efeito:{
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
      tipo: 'adicionar',
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
    tijolos: 15,
    armas: 40,
    cristais: 60,
    construtores: 2,
    soldados: 2,
    magos: 2
  },
  2: {
    castelo: 30,
    muro: 10,
    tijolos: 0,
    armas: 0,
    cristais: 0,
    construtores: 2,
    soldados: 2,
    magos: 2
  }
};

//GLOBAIS
let currentPlayer = 1;


//HIGHLIGHT EM QUEM ESTÁ JOGANDO
function adicionaCor(){
  if(currentPlayer === 1){
    document.querySelector('.player.p1').classList.add('vez');
  }
}


//ESCOLHER CADA CARTA ALEATORIAMENTE
function escolherCarta(){

  const maosJogadores = document.querySelectorAll('.campo__jogo__jogador__carta');
  maosJogadores.forEach((el) => {
    const checkBot = el.classList.contains('bot');

    let indice = Math.floor(Math.random() * cartas.length);
    const cartaSelecionada = cartas[indice];
      el.innerHTML += `
    <img src="${checkBot ? '/assets/img/molde.png' : cartaSelecionada.imagem}"  class="carta" alt="${cartaSelecionada.nome}" data-nome="${cartaSelecionada.nome}" onclick="jogarCarta(this)">
    `;
  });
}


//NOVA CARTA PARA A MÃO
function novaCarta(img){
  let novaCarta = cartas[Math.floor(Math.random() * cartas.length)];

  img.src = novaCarta.imagem;
  img.alt = novaCarta.nome;
  img.dataset.nome = novaCarta.nome;
  img.setAttribute("onclick", "jogarCarta(this)");
}


//TOCAR O SOM CORRESPONDENTE
function tocarSom(img){
  const nomeCarta = img.dataset.nome;
  const carta = cartas.find(c => c.nome === nomeCarta);
  const efeito = carta.efeito;

  switch (efeito.tipo) {
    case 'adicionar':
      if (efeito.alvo === 'castelo' || efeito.alvo === 'muro') {
        document.getElementById("somcastelo").play();
      } else {
        document.getElementById("somadicionar").play();
      }
      break;
  
    case 'dano':
      document.getElementById("somdano").play();
      break;
  
    case 'gangorra':
      document.getElementById("somgangorra").play();
      break;
  
    case 'remover':
      document.getElementById("somremover").play();
      break;
  }
}


//ATUALIZAR DADOS INTERFACE
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
  verificaCusto();


let percentPlayer = (players[1].castelo / 100) * 100;
document.getElementById('playerCastleBar').style.width = percentPlayer + '%';
let percentPlayerWall = (players[1].muro / 100) * 100;
document.getElementById('playerWallBar').style.width = percentPlayerWall + '%';


let percentEnemy = (players[2].castelo / 100) * 100;
document.getElementById('enemyCastleBar').style.width = percentEnemy + '%';
let percentEnemyWall = (players[2].muro / 100) * 100;
document.getElementById('enemyWallBar').style.width = percentEnemyWall + '%';
}


//DESABILITAR SELECAO 
function desabilitarSelecao(){
  const cartasJogador1 = document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis');
  cartasJogador1.forEach(carta => {
    carta.classList.add('naoclicavel');
  });
}


//HABILITAR NOVAMENTE
function habilitarSelecao(){
  const cartasJogador1 = document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis');
  cartasJogador1.forEach(carta => {
    carta.classList.remove('naoclicavel');
  });
}


//ADICIONA A CLASSE DESABILITADA SE NAO TIVER RECURSOS
function verificaCusto(){
  const maoJogador = document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis');

  maoJogador.forEach((divCarta) => {
    const img = divCarta.querySelector('img');

    if (!img) return; // segurança

    const nomeCarta = img.dataset.nome;
    const carta = cartas.find(c => c.nome === nomeCarta);

    if (!carta) return;

    const custo = carta.custo;
    const jogador = players[currentPlayer];

    if (jogador[custo.recurso] < custo.quantidade) {
      divCarta.classList.add('desabilitada');
      divCarta.classList.add('descartavel');
    } else {
      divCarta.classList.remove('desabilitada');
      divCarta.classList.remove('descartavel');
    }
  });
}





//JOGO COMEÇA AQUI
adicionaCor();
escolherCarta();
verificaCusto();
attUI();


// EFEITO DA CARTA E RODAR NOVA CARTA
function jogarCarta(img){


  const nomeCarta = img.dataset.nome;
  const divCarta = img.parentElement;
  const classeCampo = document.querySelector('.campo__jogo');

  if(divCarta.classList.contains('descartavel')){
    const divMensagem =  document.createElement('div');
    const carta = cartas.find(c => c.nome === nomeCarta);
    const recurso = carta.custo.recurso;

    divMensagem.classList.add('mensagem');
    divMensagem.innerHTML = `
     Deseja descartar esta cartar e receber +1 do recurso necessário? (${recurso})
    <button id="sim">Sim</button>
    <button id="nao">Não</button>
    `; 
    classeCampo.appendChild(divMensagem);
    classeCampo.classList.add('naoclicavel');

    document.getElementById('sim').addEventListener('click', () =>{
      const p = players[currentPlayer];
      document.getElementById('somflip').play();

      p[recurso] += 1;

      novaCarta(img);
      divMensagem.remove();
      divCarta.classList.remove('descartavel');
      classeCampo.classList.remove('naoclicavel');
      attUI();
      verificaCusto();
    });

    document.getElementById('nao').addEventListener('click', () =>{
      divMensagem.remove();
      classeCampo.classList.remove('naoclicavel');
      attUI();
      return;
    })
  }else{
  document.getElementById('somflip').play();
  divCarta.classList.add('animar-carta');
  setTimeout(() =>{
    tocarSom(img);
  },1000);
  setTimeout(() =>{
  divCarta.classList.remove('animar-carta');
  aplicarEfeito(nomeCarta);
  novaCarta(img);
  verificaCusto();
  },2000);  
}
}




// CHAMADA SEMPRE QUE UMA SELECIONAVEL FOR CLICADA
function aplicarEfeito(nomeCarta){

  const carta = cartas.find(c => c.nome === nomeCarta);
 
  let njogadorAlvo = currentPlayer === 1 ? 2 : 1;

  const jogador = players[currentPlayer];
  const jogadorAlvo = players[njogadorAlvo];
  const efeito = carta.efeito;
  const custo = carta.custo;
  const recurso = carta.custo.recurso;
  const qtdRecurso = carta.custo.quantidade;
  const recursoJogador = jogador[recurso];

  checarDados(jogador,efeito,jogadorAlvo);


jogador[recurso] -= qtdRecurso;
attUI();
}


//CHECAR OS DADOS
function checarDados(jogador,efeito,jogadorAlvo){
  if(efeito.tipo === 'adicionar'){
    
    adicionar(jogador,efeito);

  }else if(efeito.tipo === 'dano'){

    dano(jogadorAlvo,efeito);

}

if(efeito.tipo === 'remover'){
  remover(jogadorAlvo,efeito); 
}

if(efeito.tipo === 'gangorra'){
  gangorra(jogador,jogadorAlvo,efeito);
}


if (efeito.tipo === 'gangorratudo') {
  gangorraTudo(jogador,jogadorAlvo,efeito);
}

}

//CHECAR SE É NEGATIVO
function checarNegativo(jogadorAlvo,coisa){
  if(jogadorAlvo[coisa] < 0) jogadorAlvo[coisa] = 0;
}



//FUNCOES DE EFEITOS DAS CARTAS
function adicionar(jogador, efeito){
  jogador[efeito.alvo] += efeito.quantidade;
  attUI();
}


function dano(jogadorAlvo, efeito){
  let dano = efeito.quantidade;
  let muroAtual = jogadorAlvo.muro;

  if(muroAtual > 0){
    jogadorAlvo.muro -= dano;

    if(jogadorAlvo.muro < 0){
       let overkill = Math.abs(jogadorAlvo.muro);
       jogadorAlvo.muro = 0;
       jogadorAlvo.castelo -= overkill;
    }
  }else{
    jogadorAlvo.castelo -= dano;
  }
  attUI();
}


function remover(jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogadorAlvo[efeito.alvo] -= efeito.quantidade;
    checarNegativo(jogadorAlvo,efeito.alvo);
  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso => {
      jogadorAlvo[recurso] -= efeito.quantidade;
      checarNegativo(jogadorAlvo,recurso);
    })
  }
  attUI();
}


function gangorra(jogador,jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogador[efeito.alvo] += efeito.quantidade[0];
    jogadorAlvo[efeito.alvo] -= efeito.quantidade[1];
    checarNegativo(jogadorAlvo,efeito.alvo);
  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso =>{
      if(jogadorAlvo[recurso] > 5){
        jogador[recurso] += efeito.quantidade;
        jogadorAlvo[recurso] -= efeito.quantidade;
      }else if(jogadorAlvo[recurso] > 0 && jogadorAlvo[recurso] < 5){
        jogador[recurso] += jogadorAlvo[recurso];
        jogadorAlvo[recurso] = 0;
      }});
  }
  attUI();
}


function gangorraTudo(jogador,jogadorAlvo,efeito){
  for (let i = 0; i < efeito.alvo.length; i++) {
    const chave = efeito.alvo[i];
    jogador[chave] += efeito.quantidade;
    jogadorAlvo[chave] -= efeito.quantidade;
    if(jogadorAlvo[chave] < 0){
    efeito.alvo == 'construtores' || 
    efeito.alvo == 'soldados' ||
    efeito.alvo == 'magos' ?  jogadorAlvo[chave] = 1 : jogadorAlvo[chave] = 0
    };
  }
};




//VERIFICAR QUAL JOGADOR RECEBE RECURSOS AO FINAL DA RODADA
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



//CHAMA PROXIMA RODADA
function proximaRodada(){
  verificarJogador();

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  attUI();
}


//FAZER O BOT JOGAR
function botJoga(){
  document.querySelector('.campo__jogo__jogador__carta.selecionaveis').disabled = true;

  currentPlayer = currentPlayer === 2 ? 1 : 2;
  attUI();
}