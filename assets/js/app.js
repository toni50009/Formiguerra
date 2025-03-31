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
      quantidade: 2
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
      quantidade: 2
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

//GLOBAIS
let currentPlayer = 1;


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

      case 'gangorratudo':
        document.getElementById("sommaldicao").play();
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
  const classeCampo = document.querySelector('.campo__jogo');
  classeCampo.classList.add('naoclicavel');
}


//HABILITAR NOVAMENTE
function habilitarSelecao(){
  const classeCampo = document.querySelector('.campo__jogo');
  classeCampo.classList.remove('naoclicavel');
}


//ADICIONA A CLASSE DESABILITADA SE NAO TIVER RECURSOS
function verificarCusto(){
  const maoJogador = currentPlayer === 1? 
  document.querySelectorAll('.campo__jogo__jogador__carta.selecionaveis'):
  document.querySelectorAll('.campo__jogo__jogador__carta.bot');


  maoJogador.forEach((divCarta) => {
    const img = divCarta.querySelector('img');

    if (!img) return; // segurança

    const nomeCarta = img.dataset.nome;
    const carta = cartas.find(c => c.nome === nomeCarta);

    if (!carta) return;

    const custo = carta.custo;
    const recursoRequirido = custo.recurso.trim();
    const jogador = players[currentPlayer];

    if (jogador[recursoRequirido] < custo.quantidade) {
      divCarta.classList.add('desabilitada');
      divCarta.classList.add('descartavel');
    } else {
      divCarta.classList.remove('desabilitada');
      divCarta.classList.remove('descartavel');
    }
  });

}


//DESABILITAR BOTAO TUTORIAL DURANTE A TROCA DE VEZ
function desabilitarBotao(){
  const campoBotao = document.getElementById('buttonTutorial');
  campoBotao.classList.add('naoclicavelBotao');
}

function habilitarBotao(){
  const campoBotao = document.getElementById('buttonTutorial');
  campoBotao.classList.remove('naoclicavelBotao');
}


//JOGO COMEÇA AQUI
escolherCarta();
attUI();
verificarCusto();
comecarVez();
habilitarBotao();






//COMEÇAR A VEZ DO PLAYER E DO BOT
function comecarVez(){
  const textBox = document.createElement('div');
  const pai = document.querySelector('.campo__jogo');

  textBox.className = 'txtBox';
  textBox.textContent = 'Sua Vez';
  pai.appendChild(textBox);
  desabilitarSelecao();

  if(currentPlayer === 1){
    document.getElementById('p1-tijolos').classList.add('brilho-animado');
    document.getElementById('p1-armas').classList.add('brilho-animado');
    document.getElementById('p1-cristais').classList.add('brilho-animado');
    setTimeout(() =>{
      document.getElementById('p1-tijolos').classList.remove('brilho-animado');
      document.getElementById('p1-armas').classList.remove('brilho-animado');
      document.getElementById('p1-cristais').classList.remove('brilho-animado');
      textBox.remove();
      habilitarSelecao();
    },1000);
  }
}



//EFEITO DA CARTA E RODAR NOVA CARTA
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
    <button id="sim" class="button">Sim</button>
    <button id="nao" class="button">Não</button>
    `; 
    classeCampo.appendChild(divMensagem);
    desabilitarSelecao();

    document.getElementById('sim').addEventListener('click', () =>{
      desabilitarBotao();
      const p = players[currentPlayer];
      document.getElementById('somflip').play();

      p[recurso] += 1;

      divCarta.classList.remove('descartavel');
      divCarta.classList.add('animar-carta');
      divCarta.classList.add('descartada');
      divMensagem.remove();

      setTimeout(() =>{
        document.getElementById("somdescartar").play();
        animarCampoAdicionar(`${recurso}`);
        attUI();
      }, 1000)

      setTimeout(() => {
        divCarta.classList.remove('descartada');
        divCarta.classList.remove('animar-carta');
        novaCarta(img);
        verificarCusto();
        proximaRodada();
      }, 2000);

    });

    document.getElementById('nao').addEventListener('click', () =>{
      divMensagem.remove();
      classeCampo.classList.remove('naoclicavel');
      return;
    })
  }else{
  desabilitarBotao();
  desabilitarSelecao();
  document.getElementById('somflip').play();
  divCarta.classList.add('animar-carta');

  setTimeout(() =>{
    tocarSom(img);
    aplicarEfeito(nomeCarta);
    attUI();
  },1000);

  setTimeout(() =>{
    divCarta.classList.remove('animar-carta');
    novaCarta(img);
    verificarCusto();
    proximaRodada();
    desabilitarBotao();
},2000);  
}
}


//AUXILIAR



// CHAMADA SEMPRE QUE UMA SELECIONAVEL FOR CLICADA
function aplicarEfeito(nomeCarta){
  const carta = cartas.find(c => c.nome === nomeCarta);
 
  let njogadorAlvo = currentPlayer === 1 ? 2 : 1;

  const jogador = players[currentPlayer];
  const jogadorAlvo = players[njogadorAlvo];
  const efeito = carta.efeito;
  const recurso = carta.custo.recurso;
  const qtdRecurso = carta.custo.quantidade;


  checarDados(jogador,efeito,jogadorAlvo);

  jogador[recurso] -= qtdRecurso;
  if(typeof efeito.alvo === 'string' && efeito.alvo != 'cristais' || efeito.tipo === 'remover'){
    animarCampoRecursoPerdido(recurso);
  }
  checarNegativo(jogador,recurso);
  attUI();
}


//CHECAR OS DADOS
function checarDados(jogador,efeito,jogadorAlvo){
  switch (efeito.tipo) {
    case 'adicionar':
      adicionar(jogador,efeito);
      break;

    case 'dano':
      dano(jogadorAlvo,efeito);
      break;

    case 'remover':
      remover(jogadorAlvo,efeito);
      break;

    case 'gangorra':
      gangorra(jogador,jogadorAlvo,efeito);
      break;

    case 'gangorratudo':
      gangorraTudo(jogador,jogadorAlvo,efeito);
      break;
  }
}

//CHECAR SE É NEGATIVO
function checarNegativo(jogadorAlvo,coisa){
  if(jogadorAlvo[coisa] < 0) jogadorAlvo[coisa] = 0;
}



//FUNCOES DE EFEITOS DAS CARTAS
function adicionar(jogador, efeito){
  jogador[efeito.alvo] += efeito.quantidade;
  animarCampoAdicionar(efeito.alvo);
  attUI();
}


function dano(jogadorAlvo, efeito){
  let dano = efeito.quantidade;
  let muroAtual = jogadorAlvo.muro;

  if(muroAtual > 0){
    jogadorAlvo.muro -= dano;
    animarCampoDanoMuro();

    if(jogadorAlvo.muro < 0){
       let overkill = Math.abs(jogadorAlvo.muro);
       jogadorAlvo.muro = 0;
       jogadorAlvo.castelo -= overkill;
       if(jogadorAlvo.castelo < 0) jogadorAlvo.castelo = 0;
       animarCampoDanoCasteloMuro();
    }
  }else{
    jogadorAlvo.castelo -= dano;
    animarCampoDanoCastelo();
  }
  attUI();
}


function remover(jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogadorAlvo[efeito.alvo] -= efeito.quantidade;
    checarNegativo(jogadorAlvo,efeito.alvo);
    animarCampoRemover(efeito.alvo);
  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso => {
      jogadorAlvo[recurso] -= efeito.quantidade;
      checarNegativo(jogadorAlvo,recurso);
      animarCampoRemoverVarios(recurso);
    })
  }
  attUI();
}


function gangorra(jogador,jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogador[efeito.alvo] += efeito.quantidade[0];
    jogadorAlvo[efeito.alvo] -= efeito.quantidade[1];
    checarNegativo(jogadorAlvo,efeito.alvo);
    animarCampoRemover(efeito.alvo);
    animarCampoAdicionar(efeito.alvo);
  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso =>{
      if(jogadorAlvo[recurso] >= 5){
        jogador[recurso] += efeito.quantidade;
        jogadorAlvo[recurso] -= efeito.quantidade;
      }else if(jogadorAlvo[recurso] > 0 && jogadorAlvo[recurso] < 5){
        jogador[recurso] += jogadorAlvo[recurso];
        jogadorAlvo[recurso] = 0;

      }else{
        jogadorAlvo[recurso] = 0;
      };
      animarCampoAdicionar(recurso);
      animarCampoRemover(recurso);
    });
  }
  attUI();
}


function gangorraTudo(jogador,jogadorAlvo,efeito){

  efeito.alvo.forEach(recurso =>{
    if(jogadorAlvo[recurso] === 0 && recurso === 'tijolos' || 
      jogadorAlvo[recurso] === 0 && recurso === 'armas' ||
      jogadorAlvo[recurso] === 0 && recurso === 'cristais'){
      jogador[recurso] ++;
      jogadorAlvo[recurso] = 0;
    }else if(jogadorAlvo[recurso] === 1 && recurso === 'construtores' || 
      jogadorAlvo[recurso] === 1 && recurso === 'soldados' ||
      jogadorAlvo[recurso] === 1 && recurso === 'magos'
    ){
      jogador[recurso] ++;
      jogadorAlvo[recurso] = 1;

    }else{
      jogador[recurso] ++;
      jogadorAlvo[recurso] --;
    };
  animarCampoGangorraTudo();
  attUI();
});

}




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

  if(checarCondicaoVitoria() == true){
    return;
  }

  verificarJogador();
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  verificarCusto();
  
  if(currentPlayer === 1){
  habilitarSelecao();
  habilitarBotao();
  }
  if(currentPlayer === 2){
    botJoga();
  }
  attUI();
}






//FAZER O BOT JOGAR
function botJoga(){
  const jogaveis = [];
  desabilitarSelecao();
  
  const maoBot = document.querySelectorAll('.campo__jogo__jogador__carta.bot');
  const bot = players[currentPlayer];



  //Desestruturação 
    Array.from(maoBot).forEach(divCarta => {
    const img = divCarta.querySelector('img');
    if(!img) return;

    const nomeCarta = img.dataset.nome;
    const carta = cartas.find(c => c.nome === nomeCarta);
    if(!carta) return;

    const custo = carta.custo;
    const recurso = custo.recurso;
    const quantidade = custo.quantidade;
    if (bot[recurso] >= quantidade) {
      jogaveis.push(divCarta);
    }
  });



  if(jogaveis.length === 0){
    const descartaveis = Array.from(maoBot);
    const cartaDescartada = descartaveis[Math.floor(Math.random() * descartaveis.length)];
    document.getElementById('somflip').play();
    cartaDescartada.classList.add('animar-carta-bot');
    cartaDescartada.classList.add('descartada');
    setTimeout(()=>{
      bot['tijolos'] ++;
      bot['armas'] ++;
      bot['cristais'] ++;
      animarCampoAdicionar('tijolos');
      animarCampoAdicionar('armas');
      animarCampoAdicionar('cristais');
      document.getElementById("somdescartar").play();
      attUI();
    },1000)

    setTimeout(() => {
      cartaDescartada.classList.remove('animar-carta-bot');
      cartaDescartada.classList.remove('descartada');
      proximaRodada();
      comecarVez();
    }, 2000)
    return;
  }

  
    //Escolhe aleatoriamente uma carta que o BOT tem recurso para jogar
    const cartaEscolhida = jogaveis[Math.floor(Math.random() * jogaveis.length)];
    const imgEscolhida = cartaEscolhida.querySelector('img');
    const nomeImgEscolhida = imgEscolhida.dataset.nome;
    imgEscolhida.src = `/assets/img/${nomeImgEscolhida}/${nomeImgEscolhida}.png`;


  //Inverte a animação e executa
  document.getElementById('somflip').play();
  cartaEscolhida.classList.add('animar-carta-bot');


  setTimeout(() => {
    currentPlayer = 2;    
    tocarSom(imgEscolhida);
    aplicarEfeito(imgEscolhida.dataset.nome);
    attUI();
  }, 1000);

  setTimeout(() => {
    cartaEscolhida.classList.remove('animar-carta-bot');
    novaCarta(imgEscolhida);
    verificarCusto();
    imgEscolhida.src = '/assets/img/molde.png';
    imgEscolhida.removeAttribute("onclick");
    proximaRodada();
    comecarVez();
  }, 2000);


}



//CONDICOES DE VITORIA E DERROTA

function vencer(){
  habilitarSelecao();
  const tela = document.createElement('div');
  const pai = document.querySelector('.campo');
  tela.className = ('tela-final');
  tela.innerHTML = `Você venceu! Clique no botão para jogar novamente.
    <button class="button" onclick="reiniciarJogo()">Recomeçar</button> `;
  pai.appendChild(tela);
  document.querySelector('.campo__cartas.jogador').classList.add('naoclicavel');
}


function perder(){
  habilitarSelecao();
  const tela = document.createElement('div');
  const pai = document.querySelector('.campo');
  tela.className = ('tela-final');
  tela.innerHTML = `Você perdeu! Clique no botão para jogar novamente.
    <button class="button" onclick="reiniciarJogo()">Recomeçar</button> `;
  pai.appendChild(tela);
  document.querySelector('.campo__cartas.jogador').classList.add('naoclicavel');
}


function checarCondicaoVitoria(){
  if(players[1].castelo <= 0 || players[2].castelo >= 100){
    perder();
    return true;
  }

  if(players[2].castelo <= 0 || players[1].castelo >= 100){
    vencer();
    return true;
  }
}



//REINICIAR
function reiniciarJogo() {
  document.querySelector('.campo__cartas.jogador').classList.remove('naoclicavel');
  document.querySelector('.tela-final').remove();

  players[1] = {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  };
  players[2] = {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  };


  document.querySelectorAll('.campo__jogo__jogador__carta').forEach(div => {
    div.innerHTML = '';
    div.classList.remove('naoclicavel', 'descartada', 'desabilitada', 'descartavel');
  });

  currentPlayer = 1;
  escolherCarta();
  attUI();
  verificarCusto();
  habilitarSelecao();
  comecarVez();
  habilitarBotao();
}





//ANIMAR O CAMPO DE RECURSO

function animarCampoRecursoPerdido(recurso){
  if(currentPlayer == 1){
    document.getElementById(`p1-${recurso}`).classList.add('dark-animado-recurso');
  setTimeout(()=>{
    document.getElementById(`p1-${recurso}`).classList.remove('dark-animado-recurso');
  },1000);

  }else{
    document.getElementById(`p2-${recurso}`).classList.add('dark-animado-recurso');
  setTimeout(()=>{
    document.getElementById(`p2-${recurso}`).classList.remove('dark-animado-recurso');
  },1000);
  }
}



function animarCampoAdicionar(efeito){

  if(currentPlayer == 1){
    document.getElementById(`p1-${efeito}`).classList.add('brilho-animado');
  setTimeout(()=>{
    document.getElementById(`p1-${efeito}`).classList.remove('brilho-animado');
  },1000);

  }else{
    document.getElementById(`p2-${efeito}`).classList.add('brilho-animado');
  setTimeout(()=>{
    document.getElementById(`p2-${efeito}`).classList.remove('brilho-animado');
  },1000);
  }

}

function animarCampoDanoMuro(){

  if(currentPlayer == 1){
    document.getElementById(`p2-muro`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p2-muro`).classList.remove('dark-animado');
  },1000);

  }else{
    document.getElementById(`p1-muro`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p1-muro`).classList.remove('dark-animado');
  },1000);
  }

}

function animarCampoDanoCastelo(){
  if(currentPlayer == 1){
    document.getElementById(`p2-castelo`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p2-castelo`).classList.remove('dark-animado');
  },1000);

  }else{
    document.getElementById(`p1-castelo`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p1-castelo`).classList.remove('dark-animado');
  },1000);
  }

}


function animarCampoDanoCasteloMuro(){
  if(currentPlayer == 1){
    document.getElementById(`p2-castelo`).classList.add('dark-animado');
    document.getElementById(`p2-muro`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p2-castelo`).classList.remove('dark-animado');
    document.getElementById(`p2-muro`).classList.remove('dark-animado');
  },1000);

  }else{
    document.getElementById(`p1-castelo`).classList.add('dark-animado');
    document.getElementById(`p1-muro`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p1-castelo`).classList.remove('dark-animado');
    document.getElementById(`p1-muro`).classList.remove('dark-animado');
  },1000);
  }
}



function animarCampoRemover(efeito){
  if(currentPlayer == 1){
    document.getElementById(`p2-${efeito}`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p2-${efeito}`).classList.remove('dark-animado');
  },1000);

  }else{
    document.getElementById(`p1-${efeito}`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p1-${efeito}`).classList.remove('dark-animado');
  },1000);
  }
}

function animarCampoRemoverVarios(recurso){
  if(currentPlayer == 1){
    document.getElementById(`p2-${recurso}`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p2-${recurso}`).classList.remove('dark-animado');
  },1000);

  }else{
    document.getElementById(`p1-${recurso}`).classList.add('dark-animado');
  setTimeout(()=>{
    document.getElementById(`p1-${recurso}`).classList.remove('dark-animado');
  },1000);
  }
}



//DEPOIS TENHO QUE OTIMIZAR ESTA FUNÇÃO
function animarCampoGangorraTudo(){
  if(currentPlayer == 1){
    document.getElementById(`p2-tijolos`).classList.add('dark-animado');
    document.getElementById(`p2-armas`).classList.add('dark-animado');
    document.getElementById(`p2-cristais`).classList.add('dark-animado');
    document.getElementById(`p2-construtores`).classList.add('dark-animado');
    document.getElementById(`p2-soldados`).classList.add('dark-animado');
    document.getElementById(`p2-magos`).classList.add('dark-animado');

      document.getElementById(`p1-tijolos`).classList.add('brilho-animado');
      document.getElementById(`p1-armas`).classList.add('brilho-animado');
      document.getElementById(`p1-cristais`).classList.add('brilho-animado');
      document.getElementById(`p1-construtores`).classList.add('brilho-animado');
      document.getElementById(`p1-soldados`).classList.add('brilho-animado');
      document.getElementById(`p1-magos`).classList.add('brilho-animado');
  setTimeout(()=>{
    document.getElementById(`p2-tijolos`).classList.remove('dark-animado');
    document.getElementById(`p2-armas`).classList.remove('dark-animado');
    document.getElementById(`p2-cristais`).classList.remove('dark-animado');
    document.getElementById(`p2-construtores`).classList.remove('dark-animado');
    document.getElementById(`p2-soldados`).classList.remove('dark-animado');
    document.getElementById(`p2-magos`).classList.remove('dark-animado');

    document.getElementById(`p1-tijolos`).classList.remove('brilho-animado');
    document.getElementById(`p1-armas`).classList.remove('brilho-animado');
    document.getElementById(`p1-cristais`).classList.remove('brilho-animado');
    document.getElementById(`p1-construtores`).classList.remove('brilho-animado');
    document.getElementById(`p1-soldados`).classList.remove('brilho-animado');
    document.getElementById(`p1-magos`).classList.remove('brilho-animado');
  },1000);

  }else{
    document.getElementById(`p1-tijolos`).classList.add('dark-animado');
    document.getElementById(`p1-armas`).classList.add('dark-animado');
    document.getElementById(`p1-cristais`).classList.add('dark-animado');
    document.getElementById(`p1-construtores`).classList.add('dark-animado');
    document.getElementById(`p1-soldados`).classList.add('dark-animado');
    document.getElementById(`p1-magos`).classList.add('dark-animado');

      document.getElementById(`p2-tijolos`).classList.add('brilho-animado');
      document.getElementById(`p2-armas`).classList.add('brilho-animado');
      document.getElementById(`p2-cristais`).classList.add('brilho-animado');
      document.getElementById(`p2-construtores`).classList.add('brilho-animado');
      document.getElementById(`p2-soldados`).classList.add('brilho-animado');
      document.getElementById(`p2-magos`).classList.add('brilho-animado');
  setTimeout(()=>{
    document.getElementById(`p1-tijolos`).classList.remove('dark-animado');
    document.getElementById(`p1-armas`).classList.remove('dark-animado');
    document.getElementById(`p1-cristais`).classList.remove('dark-animado');
    document.getElementById(`p1-construtores`).classList.remove('dark-animado');
    document.getElementById(`p1-soldados`).classList.remove('dark-animado');
    document.getElementById(`p1-magos`).classList.remove('dark-animado');

    document.getElementById(`p2-tijolos`).classList.remove('brilho-animado');
    document.getElementById(`p2-armas`).classList.remove('brilho-animado');
    document.getElementById(`p2-cristais`).classList.remove('brilho-animado');
    document.getElementById(`p2-construtores`).classList.remove('brilho-animado');
    document.getElementById(`p2-soldados`).classList.remove('brilho-animado');
    document.getElementById(`p2-magos`).classList.remove('brilho-animado');
  },1000);
  }
}


function telaTutorial(){
 const classePai =  document.querySelector('.campo');
 const telaTutorial = document.createElement('div');
 telaTutorial.className = ('campo-tutorial');
 telaTutorial.innerHTML += `
         <h2 class="titulo-inicio">Bem-vindo ao Formiguerra</h2> 
      <h2>Formiguerra é um jogo de cartas onde o objetivo é destruir o castelo inimigo,
        ou fazer o seu castelo chegar a 100 de vida. O BOT poderá ganhar também pelas mesmas condições. <br><br>
        Para jogar uma carta, basta clicar nela. Todas as cartas têm um custo de algum Recurso  e são infinitas, então
        pode usar à vontade. Os recursos das cartas são: <br>
        🧱 Tijolos<br>
        ⚔️Armas<br>
        💎Cristais<br>
        > Se você não tiver o Recurso para jogar a carta, ela ficará indicada e 
        você pode DESCARTAR a carta clicando nela, e receberá 1 de Recurso do custo desta carta.
        O BOT também pode Descartar, mas ele recebe +1 de todos os Recursos se o fizer.<br>
        > A cada turno que se inicia é somado aos Recursos do jogador que está na vez os respectivos Fornecedores: <br>
        🧱 Tijolos -> É somado por: 🛠️Construtores<br>
        ⚔️Armas -> É somado por: 🛡️Soldados<br>
        💎Cristais -> É somado por: 🧙Magos<br>
        > Dica: Procure ter uma boa economia de Fornecedores, para garantir uma grande quantidade de recursos a cada rodada, 
        podendo assim jogar as cartas mais fortes e vencer o jogo! Utilize de seu Muro para proteger o Castelo. 
        <p><button class="button" onclick="sairTutorial()">Clique para Voltar</button></p>
      </h2>
 ` 
classePai.appendChild(telaTutorial);
}

function sairTutorial(){
  const telaTutorial = document.querySelector('.campo-tutorial');
  telaTutorial.remove();
}