// funciones declarativas

function miFuncion() {
  return 3;
}

miFuncion();

// funciones de expresion o anónimas

let miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

// OJO pero solo con ecma script 5 o anterior sucede lo del hoisting
// la funcion declarativa aplica el hoisting, es decir que se puede mandar a llamar
// antes de haber sido declarada,
//   en cambio la funcion de expresion o se tiene que declarar
//   antes de poderla llamar
