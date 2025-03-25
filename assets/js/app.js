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
      recurso: 'tijolos ',
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
    tijolos: 50,
    armas: 50,
    cristais: 50,
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
    <img src="${cartaSelecionada.imagem}"  class="carta" alt="${cartaSelecionada.nome}" data-nome="${cartaSelecionada.nome}" onclick="jogarCarta(this)">
    `;
  });
}

escolherCarta();



// EFEITO DA CARTA E RODAR NOVA CARTA
function jogarCarta(img){

  const nomeCarta = img.dataset.nome;

  aplicarEfeito(nomeCarta);

  let novaCarta = cartas[Math.floor(Math.random() * cartas.length)];

  img.src = novaCarta.imagem;
  img.alt = novaCarta.nome;
  img.dataset.nome = novaCarta.nome;
  img.setAttribute("onclick", "jogarCarta(this)");

  verificaCusto();

}



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
  verificaCusto();
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
  document.querySelector('.campo__jogo__jogador__carta.selecionaveis').disabled = true;

  currentPlayer = currentPlayer === 2 ? 1 : 2;
  attUI();
}


// DESABILITA O CLIQUE DA CARTA SE NÃO TEM RECURSO
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
    } else {
      divCarta.classList.remove('desabilitada');
    }
  });
}


// CHAMADA SEMPRE QUE UMA SELECIONAVEL FOR CLICADA
function aplicarEfeito(nomeCarta){

  const carta = cartas.find(c => c.nome === nomeCarta);

  if(!carta || !carta.efeito){
    console.error('Carta não encontrada ou sem efeito', nomeCarta);
    return;
  }

 
  let njogadorAlvo = currentPlayer === 1 ? 2 : 1;

  const jogador = players[currentPlayer];
  const jogadorAlvo = players[njogadorAlvo];
  const efeito = carta.efeito;
  const custo = carta.custo;
  const recurso = carta.custo.recurso;
  const qtdRecurso = carta.custo.quantidade;

  let recursoJogador = jogador[recurso];


  if(recursoJogador < qtdRecurso){
    alert('Sem quantidade suficiente');
    return;
  }
  

  if(efeito.tipo === 'adicionar'){
    
    jogador[efeito.alvo] += efeito.quantidade;

  }else if(efeito.tipo === 'dano'){

    let dano = efeito.quantidade;
    let muroAtual = players[njogadorAlvo].muro;


    if(muroAtual > 0){
      players[njogadorAlvo].muro -= dano;

      if(players[njogadorAlvo].muro < 0){
        let overkill = Math.abs(players[njogadorAlvo].muro);
        players[njogadorAlvo].muro = 0;
        players[njogadorAlvo].castelo -= overkill;
      }

  }else{
    players[njogadorAlvo].castelo -= dano;
  }


}


if(efeito.tipo === 'remover'){
  if(typeof efeito.alvo === 'string'){
  jogadorAlvo[efeito.alvo] -= efeito.quantidade;
  if (jogadorAlvo[efeito.alvo] < 0) jogadorAlvo[efeito.alvo] = 0;

}else if(Array.isArray(efeito.alvo)){
  efeito.alvo.forEach(recurso => {
    jogadorAlvo[recurso] -= efeito.quantidade;
    if(jogadorAlvo[recurso] < 0) jogadorAlvo[recurso] = 0;
  })
}
  
}



if(efeito.tipo === 'gangorra'){
  if(typeof efeito.alvo === 'string'){
  jogador[efeito.alvo] += efeito.quantidade[0];
  jogadorAlvo[efeito.alvo] -= efeito.quantidade[1];
  if(jogadorAlvo[efeito.alvo] < 0) jogadorAlvo[efeito.alvo] = 0;

}else if(Array.isArray(efeito.alvo)){
  efeito.alvo.forEach(recurso =>{
    if(jogadorAlvo[recurso] > 4){
      jogador[recurso] += efeito.quantidade;
      jogadorAlvo[recurso] -= efeito.quantidade;
    }else if(jogadorAlvo[recurso] > 0 && jogadorAlvo[recurso] < 4){
      jogador[recurso] += jogadorAlvo[recurso];
      jogadorAlvo[recurso] = 0;
    }});
}

}


if (efeito.tipo === 'gangorratudo') {
  for (let i = 0; i < efeito.alvo.length; i++) {
    const chave = efeito.alvo[i];
    jogador[chave] += efeito.quantidade;
    jogadorAlvo[chave] -= efeito.quantidade;
  }
}

jogador[recurso] -= qtdRecurso;
attUI();

}



//Funções separadas para facilitar manutenção e leitura, mas poderia ser tudo em uma função só
