let piedra = 1;
let papel = 2;
let tijera = 3;

function juego(jugador) {
  var maquina = Math.floor(Math.random() * (4 - 1) + 1);
  function cambionombre() {
    if (maquina === piedra) {
      maquina = "piedra";
    } else if (maquina === papel) {
      maquina = "papel";
    } else {
      maquina = "tijera";
    }
  }

  if (
    (jugador === piedra && maquina === tijera) ||
    (jugador === papel && maquina === piedra) ||
    (jugador === tijera && maquina === papel)
  ) {
    cambionombre();
    console.log("has ganado, la maquina saco " + maquina);
  } else if (
    (jugador === piedra && maquina === papel) ||
    (jugador === papel && maquina === tijera) ||
    (jugador === tijera && maquina === piedra)
  ) {
    cambionombre();
    console.log("has perdido, la maquina saco " + maquina);
  } else if (jugador === maquina) {
    cambionombre();
    console.log("empate, la maquina saco " + maquina);
  } else {
    console.log("vuelve a intentarlo");
  }
}

jugar();
