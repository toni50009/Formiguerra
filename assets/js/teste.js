

const players = {
    1: {
      vida: 100,
      muro: 10,
      tijolos: 0,
      guerreiros: 0,
      essencia: 0,
      construtores: 1,
      treinadores: 1,
      magos: 1
    },
    2: {
      vida: 100,
      muro: 10,
      tijolos: 0,
      guerreiros: 0,
      essencia: 0,
      construtores: 1,
      treinadores: 1,
      magos: 1
    }
  };

  let currentPlayer = 1;

  function updateUI() {
    for (let i = 1; i <= 2; i++) {
      document.getElementById(`p${i}-vida`).textContent = players[i].vida;
      document.getElementById(`p${i}-muro`).textContent = players[i].muro;
      document.getElementById(`p${i}-tijolos`).textContent = players[i].tijolos;
      document.getElementById(`p${i}-construtores`).textContent = players[i].construtores;
      document.getElementById(`p${i}-guerreiros`).textContent = players[i].guerreiros;
      document.getElementById(`p${i}-treinadores`).textContent = players[i].treinadores;
      document.getElementById(`p${i}-essencia`).textContent = players[i].essencia;
      document.getElementById(`p${i}-magos`).textContent = players[i].magos;
    }
  }

  function nextTurn() {
    const p = players[currentPlayer];
    p.tijolos += p.construtores;
    p.guerreiros += p.treinadores;
    p.essencia += p.magos;

    alert(`Jogador ${currentPlayer} recebeu:\n+${p.construtores} Tijolos\n+${p.treinadores} Guerreiros\n+${p.magos} Essência`);

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateUI();
  }

  updateUI();