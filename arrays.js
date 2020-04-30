let frutas = ["plátano", "cereza", "melón", "manzana"];

console.log(frutas.length);
// 4

console.log(frutas[0]);
// 'plátano'

let masFrutas = frutas.push("fresa");
// frutas = ['plátano', 'cereza', 'melón', 'manzana', 'fresa']

let eliminarUltimo = frutas.pop();
// frutas = ['plátano', 'cereza', 'melón', 'manzana']

//////////////

let nuevoAlInicio = frutas.unshift("fresa");

let quitarAlInicio = frutas.shift();
//////////////////////////

let posicionFrutas = frutas.indexOf("melón");
