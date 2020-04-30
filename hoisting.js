console.log(miNombre);

var miNombre = "Fernando";

/////////////

hey();

function hey() {
  console.log("Hola " + miNombre);
}

var miNombre = "Fernando";

// Hola undefined

////////////////////
hey();
var miNombre = "Fernando";

function hey() {
  console.log("Hola " + miNombre);
}

// Hola undefined

//////////////////////////
hey();

function hey() {
  var miNombre = "Fernando";
  console.log("Hola " + miNombre);
}

// Hola Fernando
