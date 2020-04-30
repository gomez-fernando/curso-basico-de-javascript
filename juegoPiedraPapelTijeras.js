let Piedra = 1;
let Papel = 2;
let Tijera = 3;

//función para validar valor contra aleatorio (entre 1 y 3) de la pc
function jugar(valor) {
  let pc = Math.round(Math.random() * (3 - 1) + parseInt(1));
  let resul = valor * pc;
  if (valor === 1 && resul === 2) {
    console.log("Pierdes!, Papel gana sobre Piedra");
  } else if (valor === 2 && resul === 2) {
    console.log("Ganas!, Papel gana sobre Piedra");
  } else if (valor === 1 && resul === 3) {
    console.log("Ganas!, Piedra gana sobre Tijeras");
  } else if (valor === 3 && resul === 3) {
    console.log("Pierdes!, Piedra gana sobre Tijeras");
  } else if (valor === 2 && resul === 6) {
    console.log("Pierdes!, Tijeras gana sobre Papel");
  } else if (valor === 3 && resul === 6) {
    console.log("Ganas!, Tijeras gana sobre Papel");
  } else {
    console.log("Empate!");
  }
}

jugar(Piedra); //llamamos a función
